import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, footer, header, nav, section
{  
    margin: 0;  
    padding: 0;  
    border: 0;  
    box-sizing: border-box;
    text-decoration: none;
}
body{
  ::-webkit-scrollbar{
    display: none;
  }
}
`;

export const Body = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: calc(1 * 100%);
  font-family: system-ui, sans-serif;
  justify-content: center;
  overflow-x: hidden;
  display: flex;
  width: 100vw;
`;
