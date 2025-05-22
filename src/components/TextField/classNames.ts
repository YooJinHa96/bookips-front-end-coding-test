import clsx from "clsx";
import type { TextFieldSize, TextFieldState } from "./types";

export const getTextFieldWrapperClass = ({
  size = "medium",
  state = "enabled",
  error = false,
  disabled = false,
  hover = false,
}: {
  size?: TextFieldSize;
  state?: TextFieldState;
  error?: boolean;
  disabled?: boolean;
  hover?: boolean;
}) => {
  const sizeMap = {
    "x-large": "w-full h-[56px] text-base",
    large: "w-full h-[48px] text-base",
    medium: "w-full h-[40px] text-sm",
  };

  return clsx(
    "flex px-4 rounded-md bg-white text-text-primary items-center justify-between",
    "border border-gray-200 focus:border-gray-700",
    sizeMap[size],
    {
      "border-gray-300": hover && !error,
      "border-status-error !bg-red-0": error,
      "!bg-gray-50 text-text-tertiary pointer-events-none border-gray-200":
        disabled,
      "border-gray-500": state === "hovered" && !error,
    }
  );
};

export const getHelperTextClass = ({
  error,
  disabled,
}: {
  error: boolean;
  disabled: boolean;
}) => {
  return clsx("px-2 pt-1 text-sm text-text-secondary", {
    "text-status-error": error,
    "text-text-tertiary": disabled,
  });
};
