import { useRef } from "react";
import type { CheckboxProps } from "./types";
import { Check } from "lucide-react";
import {
  getCheckboxWrapperClass,
  getInputClass,
  getCheckIconClass,
} from "./classNames";
export const Checkbox = ({
  checked = false,
  disabled = false,
  hovered = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const displayChecked = hovered ? true : checked;
  return (
    <label className={getCheckboxWrapperClass()}>
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        className={getInputClass({ disabled })}
        onChange={() => onChange?.(!checked)}
        {...props}
      />

      {!disabled && displayChecked && (
        <Check className={getCheckIconClass({ checked })} />
      )}
    </label>
  );
};
