import type { Meta, StoryObj } from "@storybook/angular";
import { StaticComponent } from "./static.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StaticComponent> = {
  title: "Example/Static Component",
  component: StaticComponent,
};

export default meta;
type CustomStory = StoryObj<StaticComponent>;

export const StaticExample: CustomStory = {};
