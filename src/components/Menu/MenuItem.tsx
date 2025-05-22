import type { MenuItemProps } from "./types";
import { getMenuItemClass } from "./classNames";
import { Checkbox } from "./CheckBox";
import { useState } from "react";

export const MenuItem = ({
  type,
  label,

  selected = false,
  disabled = false,
  divided = false,
  icon,
  onClick,
}: MenuItemProps) => {
  const [hovered, setHovered] = useState(false);
  const normalizedType: "select" | "multi-select" =
    type === "multi-select" ? "multi-select" : "select";

  const showCheckbox = normalizedType === "multi-select";
  const showIcon = normalizedType === "select" && icon;

  return (
    <li
      tabIndex={0}
      className={getMenuItemClass({
        selected,
        divided,
        type: normalizedType,
        disabled,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={!disabled ? onClick : undefined}
    >
      {showIcon && <span className="w-4 h-4">{icon}</span>}
      {showCheckbox && (
        <Checkbox checked={selected} disabled={disabled} hovered={hovered} />
      )}
      <span>{label}</span>
    </li>
  );
};
