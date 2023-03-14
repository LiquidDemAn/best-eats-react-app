import { useMemo, useState, useEffect, useContext, memo } from 'react';
import { AppContext } from '../../context';
import { menu } from '../../data/data';
import { Filter } from '../Filter';
import { FoodItem } from '../FoodItem';

export const FoodMenu = memo(() => {
	const [foods, setFoods] = useState(menu);
	const [category, setCategory] = useState('all');
	const [price, setPrice] = useState('all');

	const { addToCart } = useContext(AppContext);

	const { categories, prices } = useMemo(() => {
		const result = menu.reduce<{ categories: string[]; prices: string[] }>(
			(acc, { category, price }) => {
				if (!acc.categories.includes(category)) {
					acc.categories.push(category);
				}

				if (!acc.prices.includes(price)) {
					acc.prices.push(price);
				}

				return acc;
			},
			{ categories: ['all'], prices: [] }
		);

		result.prices.sort((a, b) => a.length - b.length).unshift('all');

		return result;
	}, []);

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

	return (
		<div className='mb-12'>
			<h1 className='component-header'>Top Rated Menu Items</h1>

			{/* Filter Row */}
			<div className='flex flex-col gap-4 justify-between lg:flex-row mb-6'>
				{/* Filter Category */}
				<Filter
					title='Filter Categories'
					filter={categories}
					active={category}
					handleFilter={handleCategory}
				/>

				{/* Filter Price */}
				<Filter
					title='Filter Price'
					filter={prices}
					active={price}
					handleFilter={handlePrice}
				/>
			</div>

			{/* Display Menu */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{foods.map((item) => (
					<FoodItem addToCart={addToCart} key={item.id} item={item} />
				))}
			</div>
		</div>
	);
});
