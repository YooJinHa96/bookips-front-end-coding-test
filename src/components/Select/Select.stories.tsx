import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./index"; // 실제 Select 컴포넌트 경로에 맞게 조정
import type { SelectProps } from "./types";

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },

    fillContainer: { control: "boolean" },
    label: { control: "text" },
    multiSelect: { control: "boolean" },
  },
  args: {
    size: "large",

    fillContainer: false,
    label: "선택하세요",
    multiSelect: false,
  },
};
export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  render: (args) => (
    <div
      className={`w-[300px] border border-gray-300 bg-gray-50 p-4 ${
        args.fillContainer ? "" : "flex justify-center"
      }`}
    >
      <Select {...args} />
    </div>
  ),
  args: {
    size: "large",

    fillContainer: false,
    label: "선택하세요",

    value: "",
  },
};
export const FilledContainer: Story = {
  args: {
    fillContainer: true,
  },
  render: (args) => (
    <div className="w-[300px] border border-gray-300 bg-gray-50 p-4">
      <Select {...args} />
    </div>
  ),
};

export const SmallSize: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <div className="w-[300px] border border-gray-300 bg-gray-50 p-4">
      <Select {...args} />
    </div>
  ),
};
