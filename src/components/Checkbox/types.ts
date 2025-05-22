import type { InputHTMLAttributes } from "react";
export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: "body1" | "body2";
  singleLine?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};
