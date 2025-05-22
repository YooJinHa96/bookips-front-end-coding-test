import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { MenuItem } from "./MenuItem";
import { Folder } from "lucide-react";
import type { MenuItemProps, MenuProps } from "./types";
import { SelectContext } from "@/components/Select/SelectContext";
import { useState } from "react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  args: {
    typo: "body1",
  },
  tags: ["autodocs"],
  argTypes: {
    typo: {
      control: { type: "select" },
      options: ["body1", "body2"],
    },
  },
};

export default meta;

type Story = StoryObj<MenuProps & MenuItemProps>;

const DemoSelectContextProvider = ({
  children,
  multiSelect = false,
}: {
  children: React.ReactNode;
  multiSelect?: boolean;
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((prev) =>
      multiSelect
        ? prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
        : [value]
    );
  };

  return (
    <SelectContext.Provider
      value={{
        open: true,
        selectedValue: selected,
        onSelect: handleSelect,
        multiSelect,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="w-[240px]">
      <DemoSelectContextProvider>
        <Menu {...args}>
          <MenuItem label="Open" value="Open" />
          <MenuItem label="Save" value="Save" />
          <MenuItem label="Delete" value="Delete" divided />
          <MenuItem label="Disabled" value="Disabled" disabled />
        </Menu>
      </DemoSelectContextProvider>
    </div>
  ),
};

export const AllTypes: Story = {
  parameters: {
    controls: { include: ["typo"] },
    docs: {
      description: {
        story: "세 가지 Menu type을 한 번에 비교할 수 있습니다.",
      },
    },
  },
  args: { typo: "body1" },
  render: (args) => (
    <div style={{ display: "flex", gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8 }}>type: select</div>
        <DemoSelectContextProvider>
          <Menu type="select" typo={args.typo}>
            <MenuItem label="Open" value="Open" />
            <MenuItem label="Save" value="Save" />
            <MenuItem label="Delete" value="Delete" divided />
            <MenuItem label="Disabled" value="Disabled" disabled />
          </Menu>
        </DemoSelectContextProvider>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>type: select-icon</div>
        <DemoSelectContextProvider>
          <Menu type="select-icon" typo={args.typo}>
            <MenuItem label="Open" value="Open" icon={<Folder size={16} />} />
            <MenuItem label="Save" value="Save" icon={<Folder size={16} />} />
            <MenuItem
              label="Disabled"
              value="Disabled"
              icon={<Folder size={16} />}
              disabled
            />
          </Menu>
        </DemoSelectContextProvider>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>type: multi-select</div>
        <DemoSelectContextProvider multiSelect>
          <Menu type="multi-select" typo={args.typo}>
            <MenuItem label="Open" value="Open" />
            <MenuItem label="Save" value="Save" />
          </Menu>
        </DemoSelectContextProvider>
      </div>
    </div>
  ),
};

export const Select: Story = {
  parameters: {
    controls: {
      include: ["typo", "scrollable", "divided"],
    },
    docs: {
      description: {
        story:
          "Select 타입 Menu입니다. scrollable이 true일 경우 스크롤 테스트용 아이템이 추가됩니다.",
      },
    },
  },
  argTypes: {
    divided: { control: "boolean" },
  },
  args: {
    typo: "body1",
    scrollable: false,
    divided: false,
  },
  render: (args) => {
    const baseItems = [
      <MenuItem key="selected" label="Selected" value="Selected" />,
      <MenuItem key="disabled" label="Disabled" value="Disabled" disabled />,
    ];

    const extraItems = Array.from({ length: 20 }).map((_, i) => (
      <MenuItem
        key={`extra-${i}`}
        label={`Menu Item`}
        value={`extra-${i}`}
        divided={args.divided}
      />
    ));

    return (
      <DemoSelectContextProvider>
        <Menu type="select" typo={args.typo} scrollable={args.scrollable}>
          {baseItems.concat(extraItems)}
        </Menu>
      </DemoSelectContextProvider>
    );
  },
};

export const SelectIcon: Story = {
  parameters: {
    controls: {
      include: ["typo", "scrollable", "divided"],
    },
    docs: {
      description: {
        story:
          "Select-Icon 타입 Menu입니다. scrollable이 true일 경우 스크롤 테스트용 아이템이 추가됩니다.",
      },
    },
  },
  argTypes: {
    divided: { control: "boolean" },
  },
  args: {
    typo: "body1",
    scrollable: false,
    divided: false,
  },
  render: (args) => {
    const baseItems = [
      <MenuItem
        key="open"
        label="Open"
        value="Open"
        icon={<Folder size={16} />}
      />,
      <MenuItem
        key="save"
        label="Disabled"
        value="Disabled"
        icon={<Folder size={16} />}
        disabled
      />,
    ];

    const extraItems = Array.from({ length: 20 }).map((_, i) => (
      <MenuItem
        key={`extra-${i}`}
        label={"Menu Item"}
        value={`extra-${i}`}
        icon={<Folder size={16} />}
        divided={args.divided}
      />
    ));

    return (
      <DemoSelectContextProvider>
        <Menu type="select-icon" typo={args.typo} scrollable={args.scrollable}>
          {baseItems.concat(extraItems)}
        </Menu>
      </DemoSelectContextProvider>
    );
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const baseItems = [
      <MenuItem key="selected" label="Selected" value="Selected" />,
      <MenuItem key="disabled" label="Disabled" value="Disabled" disabled />,
    ];

    const extraItems = Array.from({ length: 20 }).map((_, i) => (
      <MenuItem
        key={`extra-${i}`}
        label={`Menu Item ${i + 1}`}
        value={`extra-${i}`}
        divided={args.divided}
      />
    ));

    return (
      <DemoSelectContextProvider multiSelect>
        <Menu type="multi-select" typo={args.typo} scrollable={args.scrollable}>
          {baseItems.concat(extraItems)}
        </Menu>
      </DemoSelectContextProvider>
    );
  },
};
