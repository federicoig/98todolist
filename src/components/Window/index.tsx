import React from "react";
import "98.css";
import "./index.css";
import computer from "./computer-4.png";

export const Window: React.FC = (props) => {
    

    return (
        <div className="window wrapper">
            <div className="title-bar">
                <div className="title-bar-text">
                    <img alt="favicon" className="icon" src={computer} />
                    98todolist
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={ (e) => {window.location.hash="/"}}/>
                </div>
            </div>
            <div className="window-body">
                {props.children}
            </div>
        </div>
    );
};
