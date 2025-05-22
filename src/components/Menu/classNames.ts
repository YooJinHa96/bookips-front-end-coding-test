import clsx from "clsx";
import type { MenuTypo, MenuType } from "./types";

export const getMenuClass = ({
  typo,
  scrollable = false,
}: {
  typo: MenuTypo;
  type: MenuType;
  scrollable: boolean;
}) => {
  const typoMap = {
    body1: "max-h-[496px] text-base",
    body2: "max-h-[376px] text-sm",
  };

  return clsx(
    "rounded-md bg-white shadow-menu w-[356px] py-2",
    scrollable ? "overflow-auto" : "overflow-hidden",
    typoMap[typo]
  );
};

export const getMenuItemClass = ({
  selected,
  divided,
  type = "select",
  disabled,
}: {
  selected?: boolean;
  divided?: boolean;
  type?: "select" | "multi-select";
  disabled?: boolean;
}) => {
  return clsx(
    "flex items-center gap-3 px-4 py-2 cursor-pointer",
    !disabled && "hover:bg-gray-300 hover:bg-opacity-20",
    disabled && "text-text-tertiary hover:bg-transparent hover:cursor-default",
    {
      "text-primary-main bg-indigo-0": selected && type === "select",
      "text-primary-main bg-transparent": selected && type === "multi-select",
      "border-b border-gray-100": divided,
    }
  );
};

export const getCheckboxWrapperClass = () =>
  clsx("inline-flex items-center gap-2 relative", "text-text-primary");

export const getInputClass = ({ disabled }: { disabled: boolean }) =>
  clsx(
    "appearance-none w-4 h-4 border rounded-sm relative hover:cursor-pointer",
    disabled ? "bg-gray-200 border-gray-200" : "border-gray-200",
    "checked:bg-indigo-500"
  );

export const getCheckIconClass = ({ checked }: { checked: boolean }) =>
  clsx(
    "absolute left-0 top-[50%] -translate-y-1/2 pointer-events-none w-4 h-4",
    checked ? "text-white" : "text-gray-200"
  );
