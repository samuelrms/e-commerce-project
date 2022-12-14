import React from "react";
import { IContentDefault } from "../../interface";
import { DefaultContent } from "./styled";

export const Content = ({ children, ...props }: IContentDefault) => {
  return <DefaultContent {...props}>{children}</DefaultContent>;
};
