import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";
import { useArgs } from "@storybook/preview-api";
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    singleLine: { control: "boolean" },
    labelSize: {
      control: "radio",
      options: ["body1", "body2"],
    },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    singleLine: false,
    labelSize: "body1",
    label: "라벨 텍스트",
  },
  render: function ArgsBoundCheckbox() {
    const [{ checked, ...rest }, updateArgs] = useArgs();

    return (
      <div className="flex gap-4 w-full justify-center items-center ">
        <div className="w-[50%] ">
          <Checkbox
            {...rest}
            checked={checked}
            onChange={(newChecked) => {
              updateArgs({ checked: newChecked });
            }}
          />
        </div>
      </div>
    );
  },
};
