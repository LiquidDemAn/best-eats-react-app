import { useMemo } from 'react';
import { menu } from '../../data/data';
import { Filter } from '../Filter';

export const Menu = () => {
	const { types, prices } = useMemo(() => {
		const typesArr = menu.reduce<string[]>((acc, { category }) => {
			if (!acc.includes(category)) {
				acc.push(category);
			}

			return acc;
		}, []);

		const pricesArr = menu.reduce<string[]>((acc, { price }) => {
			if (!acc.includes(price)) {
				acc.push(price);
			}

			return acc;
		}, []);

		const types = [
			{ id: 0, item: 'all' },
			...typesArr.map((item, index) => {
				return { id: index + 1, item };
			}),
		];

		const prices = [
			{ id: 0, item: 'all' },
			...pricesArr
				.sort((a, b) => a.length - b.length)
				.map((item, index) => {
					return { id: index + 1, item };
				}),
		];

		return { types, prices };
	}, []);

	// console.log(types, prices);

	return (
		<div className='mb-12'>
			<h1 className='text-center font-bold text-4xl text-orange-600 mb-4'>
				Top Rated Menu Items
			</h1>

			{/* Filter Row */}
			<div className='flex flex-col gap-4 justify-between lg:flex-row'>
				{/* Filter Type */}
				<Filter title='Filter Type' filter={types} />

				{/* Filter Price */}
				<Filter title='Filter Price' filter={prices} />
			</div>
		</div>
	);
};
