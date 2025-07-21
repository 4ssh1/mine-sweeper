export interface ScoreBoard {
    time: string;
    levels: string[];
    onReset: ()=> void;
    mines: string;
}