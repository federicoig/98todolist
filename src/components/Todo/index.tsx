import React, { useState } from "react";
import store from "store";
import "98.css";
import "./index.css"

interface ITodo {
    activity: string,
    index: number,
}

export const Todo: React.FC<ITodo> = (props) => {
    const [ completed, setCompleted ] = useState("");
    const [ hidden, setHidden ] = useState("");

    return (
        <div className={`window todo ${completed} ${hidden}`}>
            <div className="title-bar">
                <div className="title-bar-text">
                    Todo
                </div>
                <div className="title-bar-controls">
                    <button onClick={ (e) => { 
                            setHidden("hidden");
                            store.remove(props.index);
                        }} aria-label="Close" />
                </div>
            </div>
            <div className="window-body content">
                <p>{props.activity}</p>
                <button onClick={ (e) => { 
                    setCompleted("completed-todo");
                    store.remove(props.index);
                }}>Done</button>
            </div>
        </div>
    );
};