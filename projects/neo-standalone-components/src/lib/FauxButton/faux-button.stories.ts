import type { Meta, StoryObj } from "@storybook/angular";

import { FauxButtonComponent } from "./faux-button.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FauxButtonComponent> = {
  title: "Example/Faux Button",
  component: FauxButtonComponent,
  render: (args: FauxButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<FauxButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LabelOne: Story = {
  args: {
    label: "Primary",
  },
};
