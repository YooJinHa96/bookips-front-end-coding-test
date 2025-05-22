import type { ButtonProps } from "./types";
import { getButtonClasses } from "./classNames";

export function Button({
  size = "medium",
  variant = "fill",
  color = "primary",
  isSelected = false,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  const buttonClasses = getButtonClasses({
    size,
    variant,
    color,
    isSelected,
  });

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span>{startIcon}</span>}
      {props.children && <span>{props.children}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}
