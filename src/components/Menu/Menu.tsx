import { useMemo, useState, useEffect } from 'react';
import { menu } from '../../data/data';
import { Filter } from '../Filter';
import { MenuItem } from '../MenuItem';

export const Menu = () => {
	const [foods, setFoods] = useState(menu);
	const [category, setCategory] = useState('all');
	const [price, setPrice] = useState('all');

	const handleCategory = (category: string) => {
		setCategory(category);
	};

	const handlePrice = (price: string) => {
		setPrice(price);
	};

	useEffect(() => {
		if (category === 'all' && price === 'all') {
			setFoods(menu);
			setPrice('all');
			return;
		}

		if (category === 'all' && price !== 'all') {
			setFoods(menu.filter((item) => item.price === price));
			return;
		}

		if (category !== 'all' && price === 'all') {
			setFoods(menu.filter((item) => item.category === category));
			return;
		}

		if (category !== 'all' && price !== 'all') {
			setFoods(
				menu.filter(
					(item) => item.category === category && item.price === price
				)
			);
			return;
		}
	}, [price, category]);

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

	return (
		<div className='mb-12'>
			<h1 className='component-header'>Top Rated Menu Items</h1>

			{/* Filter Row */}
			<div className='flex flex-col gap-4 justify-between lg:flex-row mb-6'>
				{/* Filter Type */}
				<Filter
					title='Filter Type'
					filter={types}
					handleFilter={handleCategory}
				/>

				{/* Filter Price */}
				<Filter
					title='Filter Price'
					filter={prices}
					handleFilter={handlePrice}
				/>
			</div>

			{/* Display Menu */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{foods.map((item) => (
					<MenuItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};
