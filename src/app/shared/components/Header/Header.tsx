import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cart, dark, cartLight } from "../../assets";
import { ValueGlobalContext } from "../../context/GlobalContext";
import { Svg } from "../Svg/Svg";
import {
  Accessibility,
  BuyCart,
  CloseAccessibility,
  ContainerHeader,
  ContentAccessibility,
  TitleHeader,
  ToggleTheme,
  TotalItemsCart,
} from "./styled";
import { light } from "./../../assets/svg/index";

export const Header = () => {
  const { handleToggleTheme, toggle, products } =
    useContext(ValueGlobalContext);
  const [accessibility, setAccessibility] = useState<boolean>(false);

  const handleClickAccessibility = () => {
    setAccessibility(!accessibility);
  };

  return (
    <ContainerHeader>
      <TitleHeader to="/">Início</TitleHeader>
      <BuyCart>
        <Link to="/checkout">
          {products > 0 && <TotalItemsCart>{products}</TotalItemsCart>}
          {toggle && (
            <Svg src={cartLight} alt="Carrinho de compras para tema light" />
          )}
          {!toggle && (
            <Svg src={cart} alt="Carrinho de compras para tema dark" />
          )}
        </Link>
      </BuyCart>
      <Accessibility isClose={accessibility} onClick={handleClickAccessibility}>
        {""}
      </Accessibility>
      {accessibility && (
        <ContentAccessibility>
          <ToggleTheme onClick={handleToggleTheme}>
            {!toggle && <Svg src={dark} alt="Luz para tema dark" />}
            {toggle && <Svg src={light} alt="Luz para tema light" />}
          </ToggleTheme>
          <CloseAccessibility
            isClose={accessibility}
            onClick={handleClickAccessibility}
          >
            {""}
          </CloseAccessibility>
        </ContentAccessibility>
      )}
    </ContainerHeader>
  );
};
