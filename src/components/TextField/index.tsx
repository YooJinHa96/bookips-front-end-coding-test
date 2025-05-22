import type { TextFieldProps } from "./types";
import { getHelperTextClass, getTextFieldWrapperClass } from "./classNames";
import { cloneElement, isValidElement, useState } from "react";
const iconSizeMap = {
  medium: 14,
  large: 16,
  "x-large": 16,
};

export function TextField({
  size = "medium",
  state = "enabled",
  value = "",
  placeholder = "",
  label,
  helperText,
  startIcon,
  endIcon,
  error = false,
  disabled = false,
  ...props
}: TextFieldProps) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className=" text-sm text-text-primary pb-2">{label}</label>
      )}
      <div
        tabIndex={0}
        className={getTextFieldWrapperClass({
          size,
          state,
          error,
          disabled,
          hover,
        })}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {startIcon && isValidElement(startIcon) && (
          <span>{cloneElement(startIcon, { size: iconSizeMap[size] })}</span>
        )}
        <input
          type="text"
          className="appearance-none  bg-transparent w-[calc(100%-24px)] border-none outline-none"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          {...props}
        />
        {endIcon && isValidElement(endIcon) && (
          <span>{cloneElement(endIcon, { size: iconSizeMap[size] })}</span>
        )}
      </div>
      {helperText && (
        <p className={getHelperTextClass({ error, disabled })}>{helperText}</p>
      )}
    </div>
  );
}
