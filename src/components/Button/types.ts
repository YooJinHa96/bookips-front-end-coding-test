import type { ButtonHTMLAttributes } from "react";

export type ButtonSize = "x-large" | "large" | "medium" | "small" | "x-small";
export type ButtonVariant = "fill" | "stroke" | "text";
export type ButtonColor = "primary" | "secondary";

export type SizeMap = Record<ButtonSize, string>;
export type ColorMap = {
  base: string;
  disabled: string;
  hovered: string;
  selected: string;
};
export type VariantMap = Record<ButtonVariant, Record<ButtonColor, ColorMap>>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  isSelected?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
