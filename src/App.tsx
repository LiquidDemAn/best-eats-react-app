import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { FoodMenu } from './components/FoodMenu';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { AppContext } from './context';
import { useCallback, useState } from 'react';
import { CartItemType, MenuItemType } from './typedef';

function App() {
	const [orders, setOrders] = useState<CartItemType[]>([]);

	const addToCart = useCallback((order: MenuItemType) => {
		setOrders((prev) => {
			const addedOrder = prev.find((item) => item.id === order.id);

			if (addedOrder) {
				addedOrder.count++;
				return [...prev];
			} else {
				return [...prev, { ...order, count: 1 }];
			}
		});
	}, []);
	
	console.log(orders);

	const removeFromCart = (id: number) => {
		setOrders((prev) => {
			return prev.filter((item) => {
				if (item.id === id && item.count === 1) {
					return false;
				}

				if (item.id === id && item.count > 1) {
					item.count--;
				}

				return true;
			});
		});
	};

	const removeAllFromCart = (id: number) => {
		setOrders((prev) => prev.filter((item) => item.id !== id));
	};

	const value = { orders, addToCart, removeFromCart, removeAllFromCart };

	return (
		<AppContext.Provider value={value}>
			<Header />
			<Hero />
			<HeadlineCards />
			<FoodMenu />
			<Categories />
		</AppContext.Provider>
	);
}

export default App;
