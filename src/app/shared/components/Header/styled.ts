import styled from "styled-components";
import { Button } from "../Button/Button";
import { Content } from "../Content/Content";
import { Link } from "react-router-dom";

interface IsClose {
  isClose: boolean;
}

export const ContainerHeader = styled(Content)`
  background: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
  max-width: 1440px;
  position: fixed;
  display: flex;
  width: 100%;
`;

export const Accessibility = styled(Content)<IsClose>`
  background: ${({ isClose }) => (isClose ? "#FF1F3D" : "#04DB31")};
  border-radius: 0 0 0 100%;
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 35px;
  right: 0;
  top: 0;
`;

export const ContentAccessibility = styled.div`
  background: ${({ theme }) => theme.colors.header_secondary};
  transform: translate(-50%, -50%);
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  display: flex;
  height: 75%;
  width: 79%;
  bottom: 0;
  left: 50%;
  top: 50%;

  animation: renderAccessibility 1s ease;
  @keyframes renderAccessibility {
    from {
      opacity: 0;
    }
    to {
      opacity: 2;
    }
  }
`;

export const CloseAccessibility = styled(Button)<IsClose>`
  background: ${({ isClose }) => (isClose ? "#FF1F3D" : "#04DB31")};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0 15px 0 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-weight: bold;
  display: flex;
  height: 30px;
  width: 30px;
  right: 0;
  top: 0;
`;

export const TitleHeader = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const BuyCart = styled(Button)`
  position: relative;
`;

export const TotalItemsCart = styled.p`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 75px;
  position: absolute;
  font-weight: bold;
  background: red;
  padding: 10px;
  right: -10px;
  top: -10px;
`;

export const ToggleTheme = styled(Button)``;

export const ToggleBigFont = styled(Button)``;

export const ToggleSmallFont = styled(Button)``;
