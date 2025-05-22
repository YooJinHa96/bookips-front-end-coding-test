import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";
import { Home, TriangleAlert, Pen } from "lucide-react";
const IconOptions = {
  None: undefined,
  Home: <Home />,
  Pen: <Pen />,
  TriangleAlert: <TriangleAlert />,
};
const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  tags: ["autodocs"],
  component: TextField,
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "focused", "hovered", "disabled", "error"],
    },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    label: { control: "text" },
    startIcon: {
      control: { type: "select" },

      options: Object.keys(IconOptions),
      mapping: IconOptions,
    },
    endIcon: {
      control: { type: "select" },
      options: Object.keys(IconOptions),
      mapping: IconOptions,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Default 상태입니다.",
      },
    },
  },

  args: {
    size: "medium",
    state: "enabled",
    placeholder: "입력해주세요",
  },
  render: (args) => (
    <div className="flex gap-4 w-[280px]">
      <TextField {...args} />
    </div>
  ),
};
export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "모든 상태와 사이즈, 아이콘 조합을 한 번에 확인할 수 있습니다.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      {/* 기본 상태들 */}
      <div>
        <div className="mb-2 text-sm font-medium text-gray-500">Enabled</div>
        <div className="flex gap-4">
          <TextField label="X-Large" size="x-large" placeholder="입력" />
          <TextField label="Large" size="large" placeholder="입력" />
          <TextField label="Medium" size="medium" placeholder="입력" />
        </div>
      </div>

      {/* Error */}
      <div>
        <div className="mb-2 text-sm font-medium text-gray-500">Error</div>
        <div className="flex gap-4">
          <TextField
            label="Error"
            error
            value="유저가 입력한 내용용"
            helperText="잘못된 값입니다"
            size="medium"
          />
          <TextField
            label="Disabled"
            disabled
            value="유저가 입력한 내용용"
            size="medium"
          />
        </div>
      </div>

      {/* 아이콘 조합 */}
      <div>
        <div className="mb-2 text-sm font-medium text-gray-500">With Icons</div>
        <div className="flex gap-4">
          <TextField
            label="Start Icon"
            startIcon={<Home />}
            placeholder="플레이스 홀더"
            size="x-large"
          />
          <TextField
            label="End Icon"
            endIcon={<Home />}
            placeholder="플레이스 홀더"
            size="x-large"
          />
        </div>
      </div>
    </div>
  ),
};
export const NoIconTextField: Story = {
  args: {
    size: "medium",
    state: "enabled",
    placeholder: "플레이스 홀더",
  },
};
export const StartIconTextField: Story = {
  parameters: {
    controls: {
      include: ["size", "state", "placeholder", "startIcon", "value"],
    },
  },
  args: {
    size: "x-large",
    state: "enabled",
    placeholder: "플레이스 홀더",
    startIcon: <Home />,
  },
};

export const EndIconTextField: Story = {
  parameters: {
    controls: {
      include: ["size", "state", "placeholder", "endIcon", "value"],
    },
  },
  args: {
    size: "x-large",
    state: "enabled",
    placeholder: "플레이스 홀더",
    endIcon: <Home />,
    value: "",
  },
};
