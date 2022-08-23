import styled from "styled-components";

export const DefaultContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  width: 100vw;
`;
