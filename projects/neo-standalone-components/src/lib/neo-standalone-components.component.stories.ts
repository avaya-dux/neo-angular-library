import type { Meta, StoryObj } from "@storybook/angular";
import { NeoStandaloneComponentsComponent } from "./neo-standalone-components.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<NeoStandaloneComponentsComponent> = {
  title: "Example/Standalone Custom component",
  component: NeoStandaloneComponentsComponent,
};

export default meta;
type CustomStory = StoryObj<NeoStandaloneComponentsComponent>;

export const CustomStandaloneComponentExample: CustomStory = {};
