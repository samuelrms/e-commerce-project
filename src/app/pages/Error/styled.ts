import styled from "styled-components";
import { ContentPages } from "../../shared";

export const ContainerError = styled(ContentPages)`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`;
