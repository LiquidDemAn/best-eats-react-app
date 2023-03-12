import { CartItemType, CategoryType } from './typedef';
import { createContext } from 'react';

type AppContextType = {
	orders: CartItemType[];
	addToCart: (order: CategoryType) => void;
	removeFromCart: (id: number) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
