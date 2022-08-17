import { IButtonDefault } from "../../interface";
import { DefaultButton } from "./styled";

export const Button = ({ children, ...props }: IButtonDefault) => {
  return <DefaultButton {...props}>{children}</DefaultButton>;
};
