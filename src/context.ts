import { CartItemType, CategoryType, MenuItemType } from './typedef';
import { createContext } from 'react';

type AppContextType = {
	orders: CartItemType[];
	addToCart: (order: MenuItemType) => void;
	removeFromCart: (id: number) => void;
	removeAllFromCart: (id: number) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
