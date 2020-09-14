import React from "react";
import "98.css";
import "./index.css";

export const WindowLayout: React.FC = (props) => {
    return (
        <div className="window wrapper">
            <div className="title-bar">
                <div className="title-bar-text">98todolist</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                {props.children}
            </div>
        </div>
    );
};