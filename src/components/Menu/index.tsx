import type { MenuItemProps, MenuProps } from "./types";
import { getMenuClass } from "./classNames";
import { Children, cloneElement, isValidElement } from "react";
import { MenuItem } from "./MenuItem";
import { useSelectContext } from "../Select/SelectContext"; // context import

export const Menu = ({
  children,
  typo = "body1",
  type = "select",
  scrollable = false,
}: MenuProps) => {
  const { open, selectedValue, onSelect } = useSelectContext();

  if (!open) return null;

  const enhancedChildren = Children.map(children, (child) => {
    if (
      isValidElement<MenuItemProps & { value: string }>(child) &&
      child.type === MenuItem
    ) {
      const value = child.props.value;
      return cloneElement(child, {
        typo,
        type,
        selected: selectedValue.includes(value),
        onClick: () => onSelect(value),
      });
    }
    return child;
  });

  return (
    <ul className={getMenuClass({ typo, type, scrollable })}>
      {enhancedChildren}
    </ul>
  );
};
