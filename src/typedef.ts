import { categories } from './data/data';

export type MenuItemType = {
	id: number;
	name: string;
	category: string;
	image: string;
	price: string;
	count?: number;
};

export type CategoryType = typeof categories[0];
