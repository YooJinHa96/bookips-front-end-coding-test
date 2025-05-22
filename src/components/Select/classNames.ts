import clsx from "clsx";
import type { SelectProps } from "./types";

export const getWrapperClass = ({
  size = "medium",
  fillContainer = false,
  hasValue = false,
}: Pick<SelectProps, "size" | "fillContainer"> & {
  hasValue?: boolean;
}): string => {
  const base =
    "inline-flex items-center gap-2 relative rounded-md cursor-pointer focus:outline-none";

  const sizeMap = {
    large: "py-3 px-4 text-text-primary h-[48px]",
    medium: "py-2.5 px-3 text-text-primary h-[40px]",
    small: "py-1.5 px-3 text-text-primary h-[32px]",
  };

  const stateMap = {
    false: {
      base: "bg-white border border-gray-200",
      hover: "hover:bg-gray-300 hover:bg-opacity-20",
      focus:
        "focus:shadow-[0_2px_8px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.04)]",
    },
    true: {
      base: "bg-gray-0 border border-gray-700",
      hover: "hover:bg-gray-300 hover:bg-opacity-20",
      focus:
        "focus:shadow-[0_2px_8px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.04)] focus:text-primary-main focus:bg-white",
    },
  };

  const state = stateMap[String(hasValue) as "true" | "false"];

  return clsx(
    base,
    sizeMap[size],
    fillContainer ? "w-full" : "w-fit",
    state.base,
    state.hover,
    state.focus
  );
};
