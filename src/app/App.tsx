import { AssemblyApp } from "./AssemblyApp/AssemblyApp";
import { GlobalContext } from "./shared/context/GlobalContext";
import { GlobalStyle } from "./styles";

export const App = () => {
  return (
    <GlobalContext>
      <GlobalStyle />
      <AssemblyApp />
    </GlobalContext>
  );
};
