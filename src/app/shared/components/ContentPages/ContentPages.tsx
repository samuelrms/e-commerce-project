import { IContentDefault } from "../../interface";
import { DefaultContent } from "./styled";

export const ContentPages = ({ children, ...props }: IContentDefault) => {
  return <DefaultContent {...props}>{children}</DefaultContent>;
};
