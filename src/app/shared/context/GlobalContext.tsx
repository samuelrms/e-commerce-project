import { createContext } from "react";
import { usePersistedState } from "../hooks";
import { lightTheme } from "../../styles";
import { IGlobalContext, IGlobalContextProps } from "../interface/iContext";

export const ValueGlobalContext = createContext<IGlobalContextProps>(
  {} as IGlobalContextProps,
);

export const GlobalContext = ({ children }: IGlobalContext) => {
  const [toggle, setToggle] = usePersistedState<boolean>("Theme", !lightTheme);
  const [products, setProducts] = usePersistedState<number>("Products", 0);

  const handleToggleTheme = () => {
    setToggle(!toggle);
  };

  const handleAddProducts = (value: number) => {
    if (products > -1) {
      setProducts(products + value);
    } else {
      setProducts(0);
    }
  };

  const themeContextToggleAndState: IGlobalContextProps = {
    handleToggleTheme,
    handleAddProducts,
    products,
    toggle,
  };

  return (
    <ValueGlobalContext.Provider value={themeContextToggleAndState}>
      {children}
    </ValueGlobalContext.Provider>
  );
};
