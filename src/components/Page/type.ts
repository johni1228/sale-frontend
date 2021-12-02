import { ReactNode } from "react";
import { SpaceProps, TypographyProps } from "styled-system";

export const colors = {
  WHITE: "white",
  TRANSPARENT: "transparent"
} as const;

export type Colors = typeof colors[keyof typeof colors];

export interface PageProps extends SpaceProps, TypographyProps {
  color?: Colors;
  children?: ReactNode;
}