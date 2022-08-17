export interface IGlobalContext {
  children?: React.ReactNode;
}

export interface IGlobalContextProps {
  handleAddProducts: (value: number) => void;
  handleToggleTheme: () => void;
  products: number;
  toggle: boolean;
}
