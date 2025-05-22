import { createContext, useContext } from "react";

interface SelectContextValue {
  onSelect: (value: string) => void;
  selectedValue: string[];
  multiSelect: boolean;
  open: boolean;
}

export const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelectContext = () => {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("Select context must be used within Select");
  return ctx;
};
