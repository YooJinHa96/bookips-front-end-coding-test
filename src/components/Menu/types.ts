import type { ReactElement } from "react";
import type { MenuItem } from "./MenuItem";

export type MenuTypo = "body1" | "body2";
export type MenuType = "select" | "select-icon" | "multi-select";

export interface MenuProps {
  children: ReactElement<typeof MenuItem> | ReactElement<typeof MenuItem>[];
  typo?: MenuTypo;
  type?: MenuType;
  scrollable?: boolean;
}

export interface MenuItemProps {
  typo?: MenuTypo;
  type?: MenuType;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  divided?: boolean;
  icon?: React.ReactNode;
  value?: string;
  onClick?: () => void;
}

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  hovered?: boolean;
  onChange?: (checked: boolean) => void;
}
