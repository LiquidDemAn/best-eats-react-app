import { MenuItemType } from './typedef';

export const getOrdersFromStorage = (): MenuItemType[] => {
	const orders = localStorage.getItem('orders');
	return orders ? JSON.parse(orders) : [];
};

export const setOrdersInStorage = (orders: MenuItemType[]) => {
	localStorage.setItem('orders', JSON.stringify(orders));
};
