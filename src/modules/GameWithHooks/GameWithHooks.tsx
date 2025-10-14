import type { FC } from "react";
import Info from "../../components/header/Info";
import StaticGame from "../../components/game/StaticGame";

export const GameWithHooks: FC = ()=> {
    return (
       <>
            <div className="flex flex-col h-screen justify-center items-center">
                <Info />
                <StaticGame />
            </div>
    </> 
    )
}