import type { Meta, StoryFn } from "@storybook/react";
import EmptyCell from "../components/header/grid/EmptyCell";
import type { EmptyCellProps } from "../interfaces";

const meta: Meta<typeof EmptyCell> = {
  component: EmptyCell,
  title: "EmptyCell",
};
export default meta

const template: StoryFn<EmptyCellProps> = (args) => <EmptyCell {...args} />

export const Default = template.bind({})
export const MouseDown = template.bind({})
export const Empty = template.bind({})


Default.args = {
  children: 1,
  onContextMenu: (e) => {
    e.preventDefault();
    console.log("Right-clicked");
  },
  "data-testid": "empty-cell",
};


MouseDown.args = {
  children: 1,
  onContextMenu: (e) => {
    e.preventDefault();
    console.log("Right-clicked");
  },
  mousedown: true,
  "data-testid": "empty-cell-mousedown",
}

Empty.args = {
  onContextMenu: (e) => {
    e.preventDefault();
    console.log("Right-clicked");
  },
  "data-testid": "empty-cell-empty",
}