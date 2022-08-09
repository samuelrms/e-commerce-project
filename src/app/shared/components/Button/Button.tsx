import { IButtonDefault } from "../../interface";
import { DefaultButton } from "./styled";

export const Button = ({ children }: IButtonDefault) => {
  return <DefaultButton>{children}</DefaultButton>;
};
