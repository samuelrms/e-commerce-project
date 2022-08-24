import { useContext, useRef, useState } from "react";
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
  ToggleBigFont,
  ToggleSmallFont,
  ToggleTheme,
  TotalItemsCart,
} from "./styled";
import {
  accessibilityIconDark,
  accessibilityIconLight,
  darkBigFont,
  darkSmallFont,
  light,
  lightBigFont,
  lightSmallFont,
} from "./../../assets/svg";
import { useOnClickOutside } from "../../hooks";

export const Header = () => {
  const { handleToggleTheme, toggle, products } =
    useContext(ValueGlobalContext);
  const [accessibility, setAccessibility] = useState<boolean>(false);

  const isAccessibilityRef = useRef<HTMLDivElement>(null);

  useOnClickOutside<HTMLDivElement>(isAccessibilityRef, () =>
    setAccessibility(!accessibility),
  );

  const handleClickAccessibility = () => {
    setAccessibility(!accessibility);
  };

  return (
    <ContainerHeader>
      <TitleHeader to="/">Início</TitleHeader>
      <BuyCart>
        <Link to="/checkout">
          {products > 0 && <TotalItemsCart>{products}</TotalItemsCart>}
          <Svg src={toggle ? cartLight : cart} alt="Carrinho de compras" />
        </Link>
      </BuyCart>
      <Accessibility isClose={accessibility} onClick={handleClickAccessibility}>
        <Svg
          src={toggle ? accessibilityIconLight : accessibilityIconDark}
          alt="Icon de acessibilidade"
        />
      </Accessibility>
      {accessibility && (
        <ContentAccessibility ref={isAccessibilityRef}>
          <ToggleSmallFont>
            <Svg
              width={20}
              src={toggle ? lightSmallFont : darkSmallFont}
              alt="Aumentar fonte"
            />
          </ToggleSmallFont>
          <ToggleTheme onClick={handleToggleTheme}>
            <Svg src={toggle ? light : dark} alt="Icon de luz para theme" />
          </ToggleTheme>
          <ToggleBigFont>
            <Svg
              width={30}
              src={toggle ? lightBigFont : darkBigFont}
              alt="Diminuir fonte"
            />
          </ToggleBigFont>
          <CloseAccessibility
            isClose={accessibility}
            onClick={handleClickAccessibility}
          >
            X
          </CloseAccessibility>
        </ContentAccessibility>
      )}
    </ContainerHeader>
  );
};
