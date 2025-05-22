import type { SelectProps } from "./types";
import { getWrapperClass } from "./classNames";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import clsx from "clsx";

import { SelectContext } from "./SelectContext";

export const Select = ({
  size = "large",
  fillContainer = false,
  multiSelect = false,
  value,
  label = "Label",
  children,
  onChange,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selectedValue, setSelectedValue] = useState<string[]>(
    Array.isArray(value)
      ? value.filter((v) => v.trim() !== "")
      : typeof value === "string" && value.trim() !== ""
      ? [value]
      : []
  );

  const hasValue = selectedValue.some((v) => v.trim() !== "");

  const handleSelect = (option: string) => {
    let updated: string[];
    if (multiSelect) {
      updated = selectedValue.includes(option)
        ? selectedValue.filter((v) => v !== option)
        : [...selectedValue, option];
    } else {
      updated = [option];
      setOpen(false);
    }
    setSelectedValue(updated);
    onChange?.(multiSelect ? updated : updated[0]);
  };

  useEffect(() => {
    if (open && wrapperRef.current) {
      const width = wrapperRef.current.getBoundingClientRect().width;
      setMenuWidth(width);
    }
  }, [open]);

  return (
    <SelectContext.Provider
      value={{ onSelect: handleSelect, selectedValue, multiSelect, open }}
    >
      <div className="relative w-full" ref={wrapperRef}>
        <button
          type="button"
          className={getWrapperClass({ size, fillContainer, hasValue })}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={clsx("flex-1 text-left truncate")}>
            {hasValue
              ? selectedValue.join(", ")
              : label === "Label" || label.trim() === ""
              ? "선택하세요"
              : label}
          </span>
          {open ? (
            <ChevronUp className="text-gray-700 shrink-0" strokeWidth={2} />
          ) : (
            <ChevronDown className="text-gray-700 shrink-0" strokeWidth={2} />
          )}
        </button>

        {open &&
          Children.map(children, (child) => {
            if (isValidElement<{ style?: React.CSSProperties }>(child)) {
              return cloneElement(child, {
                style: { width: menuWidth || "100%" },
              });
            }
            return child;
          })}
      </div>
    </SelectContext.Provider>
  );
};
