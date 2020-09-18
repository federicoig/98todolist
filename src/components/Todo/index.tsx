import React, { useState } from "react";
import "98.css";
import "./index.css"

interface ITodo {
    item: string,
    key: number
}

export const Todo: React.FC<ITodo> = (props) => {
    
    const [ completed, setCompleted ] = useState("");
    const [ hidden, setHidden ] = useState("");

    return (
        <div className={`window todo ${completed} ${hidden}`}>
            <div className="title-bar">
                <div className="title-bar-text"></div>
                <div className="title-bar-controls">
                    <button onClick={ (e) => { 
                            setHidden("hidden");
                        }} aria-label="Close" />
                </div>
            </div>
            <div className="window-body content">
                <p>{props.item}</p>
                <button onClick={ (e) => { setCompleted("completed-todo") }}>Done</button>
            </div>
        </div>
    );
};