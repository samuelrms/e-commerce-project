import styled from "styled-components";

interface IContainerSvg {
  padding?: number;
}

export const ContainerSvg = styled.img<IContainerSvg>`
  padding: ${({ padding }) => padding || 0}px;
  height: ${({ height }) => height || 40}px;
  width: ${({ width }) => width || 40}px;
  max-height: 100%;
  max-width: 100%;
`;
