import { CartItemType, CategoryType } from './typedef';
import { createContext } from 'react';

type AppContextType = {
	orders: CartItemType[];
    addToCart: (order: CategoryType) => void
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
