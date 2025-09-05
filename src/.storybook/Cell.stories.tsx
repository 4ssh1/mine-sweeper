import type { Meta, StoryFn } from "@storybook/react";
import Cell from "../components/Cell";
import type { CellProps } from "../interfaces";
import { CellState } from "../helpers/Board";

const meta: Meta<typeof Cell> = {
  component: Cell,
  title: "Components/Cell",
}
export default meta

const template: StoryFn<CellProps> = (args) => <Cell {...args} />

export const Empty = template.bind({})
export const Bomb = template.bind({})
export const Hidden = template.bind({});
export const WeakMark = template.bind({});
export const Number = template.bind({});
export const Mark = template.bind({});

Empty.args = {
  children: CellState.empty,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-empty",
}

Bomb.args = {
  children: CellState.bomb,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-bomb",
}

Hidden.args = {
  children: CellState.hidden,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-hidden",
}

Mark.args = {
  children: CellState.mark,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-mark",
}

WeakMark.args = {
  children: CellState.weakMark,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-weak-mark",
}

Number.args = {
  children: 3,
  coords: [0, 0],
  onClick: (coords) => console.log("Clicked:", coords),
  onContextMenu: (coords) => console.log("Right-clicked:", coords),
  "data-testid": "cell-number",
}