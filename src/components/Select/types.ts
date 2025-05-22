import type { ReactNode } from "react";

export type SelectProps = {
  size?: "large" | "medium" | "small";
  fillContainer?: boolean;
  multiSelect?: boolean;
  value?: string | string[];
  label?: string;
  children?: ReactNode;
  onChange?: (value: string | string[]) => void;
};
