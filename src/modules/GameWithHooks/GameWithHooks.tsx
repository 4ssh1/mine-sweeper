import { type FC } from "react";
import Info from "../../components/header/Info";

export const GameWithHooks: FC = ()=> {
     return (
       <>
            <div className="flex flex-col h-screen justify-center items-center">
                <Info />
            </div>
    </> 
    )
}