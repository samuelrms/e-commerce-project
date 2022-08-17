import styled from "styled-components";

interface IContainerSvg {
  padding?: number;
}

export const ContainerSvg = styled.img<IContainerSvg>`
  max-width: 100%;
  max-height: 100%;
  width: ${({ width }) => width || 40}px;
  height: ${({ height }) => height || 40}px;
  padding: ${({ padding }) => padding || 0}px;
`;
