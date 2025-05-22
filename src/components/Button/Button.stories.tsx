import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import {
  Home,
  Search,
  Settings,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const startIconOptions = {
  None: undefined,
  Home: <Home />,
  Search: <Search />,
  Settings: <Settings />,
};
const endIconOptions = {
  None: undefined,
  ArrowRight: <ChevronRight />,
  ArrowLeft: <ChevronLeft />,
  ArrowUp: <ChevronUp />,
  ArrowDown: <ChevronDown />,
};

type ButtonStoryMeta = Meta<typeof Button>;
const meta: ButtonStoryMeta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    startIcon: {
      control: { type: "select" },
      name: "startIcon?",
      options: Object.keys(startIconOptions),
      mapping: startIconOptions,
    },
    endIcon: {
      control: { type: "select" },
      name: "endIcon?",
      options: Object.keys(endIconOptions),
      mapping: endIconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: (args) => (
    <div className="flex gap-4 w-24">
      <Button {...args}>
        {args.children !== "" ? args.children : "Enabled"}
      </Button>

      <Button {...args} disabled>
        {args.children !== "" ? args.children : "Disabled"}
      </Button>

      <Button {...args} isSelected>
        {args.children !== "" ? args.children : "Selected"}
      </Button>

      <Button {...args}>
        {args.children !== "" ? args.children : "Hovered"}
      </Button>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    size: "x-large",
    variant: "fill",
    color: "primary",
    children: "",
  },
};
export const Enabled: Story = {
  render: (args) => (
    <div className="w-24">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Enabled",
    isSelected: false,
    disabled: false,
    size: "x-large",
    variant: "fill",
    color: "primary",
  },
};
export const Disabled: Story = {
  render: (args) => (
    <div className="w-24">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Disabled",
    isSelected: false,
    disabled: true,
    size: "x-large",
    variant: "fill",
    color: "primary",
  },
};
export const Selected: Story = {
  render: (args) => (
    <div className="w-24">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Selected",
    isSelected: true,
    disabled: false,
    size: "x-large",
    variant: "fill",
    color: "primary",
  },
};
export const Hovered: Story = {
  render: (args) => (
    <div className="w-24">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Hovered",
    isSelected: false,
    disabled: false,
    size: "x-large",
    variant: "fill",
    color: "primary",
  },
  parameters: {
    pseudo: { hover: true }, // 마우스를 올린 것처럼 시뮬레이션
  },
};
