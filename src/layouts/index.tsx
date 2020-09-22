import React from "react";
import { Window } from "../components/Window/index";

export const AppLayout: React.FC = (props) => {
    return (
        <>
            <Window>
                {props.children}
            </Window>
        </>
    )
}