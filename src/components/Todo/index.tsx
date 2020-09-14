import React from "react";
import "98.css";
import "./index.css"

interface Todo {
    item: string,
    key: number
}

export const Todo: React.FC<Todo> = (props) => {

    return (
        <div className="window todo">
            <div className="title-bar">
                <div className="title-bar-text"></div>
                <div className="title-bar-controls">
                    <button aria-label="Close" />
                </div>
            </div>
            <div className="window-body content">
                <p>{props.item}</p>
                <button>Done</button>
            </div>
        </div>
    );
};