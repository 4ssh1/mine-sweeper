import type { ReactNode } from "react";

export type MouseDown = ()=> void;
export type MouseUp = ()=> void;

export interface ScoreBoard {
    time: string;
    levels: string[];
    onReset: ()=> void;
    mines: string;
}

export type CellType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FieldType = CellType [][]; 
export type CoordType = [number, number];
export type Props = React.HTMLAttributes<HTMLDivElement>;

export interface CellProps {
    children?: CellType;
    coords: CoordType;
    onClick: (coords: CoordType)=> void;
    onContextMenu: (coords: CoordType)=> void;
    'data-testid'?: string;
}

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

export interface EmptyCellProps {
  children?: CellType;
  onClick?: () => void;
  onContextMenu: React.MouseEventHandler<HTMLElement>;
  "data-testid"?: string;
  mousedown?: boolean;
}

export interface GridProps {
  children: FieldType;
  onClick: (coords: CoordType) => void;
  onContextMenu: (coords: CoordType) => void;
}

export interface BombFrameProps extends Pick<EmptyCellProps, "onContextMenu" | "data-testid"> {
  children: ReactNode;
}