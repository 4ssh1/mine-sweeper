import type { GridProps } from "../interfaces";
import type { FC } from "react";
import Cell from "./Cell";


export const Grid: FC<GridProps> = ({children, ...rest}) => (
    <>
        {children.map((row, y)=> 
            row.map((cell, x)=> (
            <Cell key={`${y}_${x}`} coords={[y, x]} children={cell} {...rest} />
            )))}
    </>
)
