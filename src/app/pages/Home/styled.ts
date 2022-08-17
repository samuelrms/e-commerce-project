import styled from "styled-components";
import { ContentPages } from "../../shared";

export const ContainerHome = styled(ContentPages)`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`;
