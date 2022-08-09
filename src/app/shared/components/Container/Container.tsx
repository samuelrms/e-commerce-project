import React from "react";
import { IContainerDefault } from "../../interface";
import { DefaultContainer } from "./styled";

export const Container = ({ children }: IContainerDefault) => {
  return <DefaultContainer>{children}</DefaultContainer>;
};
