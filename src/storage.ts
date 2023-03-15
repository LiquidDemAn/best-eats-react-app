import { CartItemType } from './typedef';

export const getOrdersFromStorage = (): CartItemType[] => {
	const orders = localStorage.getItem('orders');
	return orders ? JSON.parse(orders) : [];
};

export const setOrdersInStorage = (orders: CartItemType[]) => {
	localStorage.setItem('orders', JSON.stringify(orders));
};
