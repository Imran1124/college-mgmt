import { useContext, createContext } from 'react';
import AuthContext from './AuthContext';
import CollapseContext from './CollapseContext';
import UseThemeContext from './UseThemeContext';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function ContextProviders({ children }) {
  const authValue = AuthContext();
  const collapseValue = CollapseContext();
  const themeContext = UseThemeContext();
  const contextValue = Object.assign(
    {},
    authValue,
    collapseValue,
    themeContext
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
