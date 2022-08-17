import { ISvg } from "../../interface";
import { ContainerSvg } from "./styled";

export const Svg = ({ src, alt, height, width, padding, ...props }: ISvg) => {
  return (
    <ContainerSvg
      src={src}
      alt={alt}
      height={height}
      width={width}
      padding={padding}
      {...props}
    />
  );
};
