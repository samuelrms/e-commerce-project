import { HTMLAttributes } from "react";

// Interface Container Default
export interface IContainerDefault {
  children: React.ReactNode;
}

// Interface Content Default
export interface IContentDefault
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
}

// Interface Button Default
export interface IButtonDefault
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  children: React.ReactNode;
}

export interface ISvg
  extends Omit<HTMLAttributes<HTMLImageElement>, "children"> {
  src: string;
  width?: number;
  alt: string;
  height?: number;
  padding?: number;
}
