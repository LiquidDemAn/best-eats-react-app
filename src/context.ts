import { createContext } from 'react';

type AppContextType = {};

export const AppContext = createContext<AppContextType>({} as AppContextType);
