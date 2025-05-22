import clsx from "clsx";

export const getCheckboxWrapperClass = ({
  disabled,
  singleLine,
  checked,
}: {
  disabled: boolean;
  singleLine: boolean;
  checked: boolean;
}) => {
  return clsx(
    "inline-flex items-center gap-2 relative text-text-primary",
    singleLine ? "w-fit" : "w-full",
    {
      "cursor-not-allowed text-text-tertiary": disabled,
      "!text-blue-500": checked,
    }
  );
};

export const getLabelClass = (labelSize: "body1" | "body2") =>
  clsx(labelSize === "body2" ? "text-sm" : "text-base");

export const getInputClass = ({ disabled }: { disabled: boolean }) =>
  clsx(
    "appearance-none w-3 h-3 border rounded-sm relative",
    disabled ? "bg-gray-200 border-gray-200" : "border-gray-200",
    "checked:bg-blue-400 indeterminate:bg-blue-400"
  );

export const getCheckIconClass = ({ checked }: { checked: boolean }) =>
  clsx(
    "absolute left-0 top-[50%] -translate-y-1/2 pointer-events-none w-3 h-3",
    checked ? "text-white" : "text-gray-200"
  );

export const getMinusIconClass = () =>
  clsx(
    "absolute left-0 top-[50%] -translate-y-1/2 pointer-events-none w-3 h-3 text-white"
  );
