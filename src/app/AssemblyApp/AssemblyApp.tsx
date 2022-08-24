import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "../routes/App.routes";
import { ValueGlobalContext } from "../shared/context/GlobalContext";
import { Body, darkTheme, lightTheme } from "../styles";

export const AssemblyApp = () => {
  const { toggle } = useContext(ValueGlobalContext);

  return (
    <ThemeProvider theme={toggle ? lightTheme : darkTheme}>
      <Body>
        <AppRoutes />
      </Body>
    </ThemeProvider>
  );
};
