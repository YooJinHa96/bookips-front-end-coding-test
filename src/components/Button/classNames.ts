import clsx from "clsx";
import type { ButtonProps, SizeMap, VariantMap } from "./types";

export const getButtonClasses = ({
  size = "medium",
  variant = "fill",
  color = "primary",
  isSelected = false,
}: ButtonProps): string => {
  const base =
    "w-full inline-flex items-center justify-center rounded-md focus:outline-none active:outline-none gap-2";

  const sizeMap: SizeMap = {
    "x-large": "h-14 px-6 py-4 text-base",
    large: "h-12 px-5 py-3 text-base",
    medium: "h-10 px-4 py-2.5 text-sm",
    small: "h-8 px-3 py-1.5 text-sm",
    "x-small": "h-6 px-2 py-0.5 text-sm",
  };

  const variantMap: VariantMap = {
    fill: {
      primary: {
        base: "border-none bg-primary-main text-white",
        disabled: "disabled:bg-gray-100 disabled:text-text-tertiary",
        hovered: "hover:bg-primary-dark",
        selected: "!bg-primary-dark",
      },
      secondary: {
        base: "border-none bg-indigo-100 text-primary-main",
        disabled: "disabled:bg-gray-100 disabled:text-gray-400",
        hovered: "hover:bg-indigo-200",
        selected: "!bg-indigo-200",
      },
    },
    stroke: {
      primary: {
        base: "border border-primary-main text-primary-main bg-white",
        disabled:
          "disabled:border-gray-100 disabled:text-text-tertiary disabled:hover:bg-white",
        hovered: "hover:bg-indigo-50",
        selected: "!bg-indigo-50",
      },
      secondary: {
        base: "border border-gray-200 text-text-secondary bg-white",
        disabled:
          "disabled:border-gray-100 disabled:text-text-tertiary disabled:hover:bg-white",
        hovered: "hover:bg-gray-50",
        selected: "bg-gray-50",
      },
    },
    text: {
      primary: {
        base: "text-primary-main bg-transparent",
        disabled: "disabled:text-text-tertiary disabled:hover:bg-transparent",
        hovered: "hover:bg-indigo-50",
        selected: "bg-indigo-50",
      },
      secondary: {
        base: "text-text-secondary bg-transparent",
        disabled:
          "disabled:text-text-tertiary disabled:hover:bg-transparent disabled:hover:opacity-100",
        hovered: "hover:bg-gray-300 hover:bg-opacity-20",
        selected: "bg-gray-300 bg-opacity-20",
      },
    },
  };

  const variantConfig = variantMap[variant][color];

  return clsx(
    base,
    sizeMap[size],
    variantConfig.base,
    variantConfig.disabled,
    variantConfig.hovered,
    isSelected && variantConfig.selected
  );
};
