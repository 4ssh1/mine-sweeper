import type { Meta, StoryFn } from "@storybook/react";
import type {GridProps } from "../src/interfaces";
import { Grid } from "../src/components/Grid";


const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Grid",
};
export default meta;

const template: StoryFn<GridProps> = (args)=> <Grid {...args}/>

export const gridEx = template.bind({})

gridEx.args = {
    children:  [
        [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
        [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
        [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
        [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0 ,0 ],
        [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
        [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
        [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
        [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],                
        [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],                
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],                
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],                
    ],
    onClick: (coords) => console.log("Clicked:", coords),
    onContextMenu: (coords) => console.log("Right-clicked:", coords),
}

