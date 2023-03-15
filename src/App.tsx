import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { FoodMenu } from './components/FoodMenu';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { AppContext } from './context';
import { useMemo, useState } from 'react';
import { CartItemType, MenuItemType } from './typedef';
import { getOrdersFromStorage, setOrdersInStorage } from './storage';

function App() {
	const storedOrders = useMemo(() => {
		return getOrdersFromStorage();
	}, []);

	const [orders, setOrders] = useState<CartItemType[]>(storedOrders);

	const addToCart = (order: MenuItemType) => {
		setOrders((prev) => {
			const addedOrder = prev.find((item) => item.id === order.id);

			if (addedOrder) {
				addedOrder.count++;
				setOrdersInStorage(prev);
				return [...prev];
			} else {
				const newOrder = { ...order, count: 1 };

				setOrdersInStorage([...prev, newOrder]);
				return [...prev, newOrder];
			}
		});
	};

	const removeFromCart = (id: number) => {
		setOrders((prev) => {
			const result = prev.filter((item) => {
				if (item.id === id && item.count === 1) {
					return false;
				}

				if (item.id === id && item.count > 1) {
					item.count--;
				}

				return true;
			});

			setOrdersInStorage(result);
			return result;
		});
	};

	const removeAllFromCart = (id: number) => {
		setOrders((prev) => {
			const result = prev.filter((item) => item.id !== id);
			setOrdersInStorage(result);
			return result;
		});
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
