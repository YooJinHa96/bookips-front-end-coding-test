import type { ReactElement, InputHTMLAttributes } from "react";

export type TextFieldSize = "x-large" | "large" | "medium";

export type TextFieldState =
  | "enabled"
  | "hovered"
  | "filled"
  | "disabled"
  | "error";

// 공통 props 정의
interface BaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: TextFieldSize;
  state?: TextFieldState;
  label?: string;
  helperText?: string;
  error?: boolean;
}

// 아이콘 조건 분기
type WithStartIconOnly = {
  startIcon?: ReactElement<{ size?: number }>;
  endIcon?: never;
};

type WithEndIconOnly = {
  startIcon?: never;
  endIcon?: ReactElement<{ size?: number }>;
};

type WithNoIcons = {
  startIcon?: undefined;
  endIcon?: undefined;
};

// 최종 props 타입
export type TextFieldProps = BaseProps &
  (WithStartIconOnly | WithEndIconOnly | WithNoIcons);
