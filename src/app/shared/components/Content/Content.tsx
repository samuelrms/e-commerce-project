import React from "react";
import { IContentDefault } from "../../interface";
import { DefaultContent } from "./styled";

export const Content = ({ children }: IContentDefault) => {
  return <DefaultContent>{children}</DefaultContent>;
};
