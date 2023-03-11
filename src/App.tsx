import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { FoodMenu } from './components/FoodMenu';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { AppContext } from './context';
import { useState } from 'react';
import { CartItemType, CategoryType } from './typedef';

function App() {
	const [orders, setOrders] = useState<CartItemType[]>([]);

	const addToCart = (order: CategoryType) => {
		setOrders((prev) => {
			const addedOrder = prev.find((item) => item.id === order.id);

			if (addedOrder) {
				addedOrder.count++;
				return [...prev];
			} else {
				return [...prev, { ...order, count: 1 }];
			}
		});
	};
	console.log(orders);

	const removeFromCart = (id: number) => {
		setOrders((prev) => {
			prev.filter((item) => {
				if (item.id === id && item.count === 1) {
					return false;
				}

				if (item.id === id && item.count > 1) {
					item.count--;
				}

				return true;
			});

			return prev;
		});
	};

	const value = { orders, addToCart };

	return (
		<AppContext.Provider value={value}>
			<div className='max-w-[1640px] mx-auto px-4'>
				<Header />
				<Hero />
				<HeadlineCards />
				<FoodMenu />
				<Categories />
			</div>
		</AppContext.Provider>
	);
}

export default App;
