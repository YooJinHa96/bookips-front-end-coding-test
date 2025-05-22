import { useEffect, useRef, useState } from "react";
import type { CheckboxProps } from "./types";
import { Check, Minus } from "lucide-react";
import {
  getCheckboxWrapperClass,
  getLabelClass,
  getInputClass,
  getCheckIconClass,
  getMinusIconClass,
} from "./classNames";
export const Checkbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  label = "",
  labelSize = "body1",
  singleLine = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !singleLine && checked && indeterminate;
    }
  }, [indeterminate, singleLine, checked]);
  // hover 중이면 checked를 true로 강제
  const displayChecked = hovered ? true : checked;
  return (
    <label
      className={getCheckboxWrapperClass({ disabled, singleLine, checked })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        className={getInputClass({ disabled })}
        onChange={() => onChange?.(!checked)}
        {...props}
      />

      {!disabled && !indeterminate && displayChecked && (
        <Check className={getCheckIconClass({ checked })} />
      )}

      {!disabled && indeterminate && !singleLine && checked && (
        <Minus className={getMinusIconClass()} />
      )}

      <span className={getLabelClass(labelSize)}>{label}</span>
    </label>
  );
};
