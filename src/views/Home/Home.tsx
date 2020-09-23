import React from "react";
import { AppLayout } from "../../layouts";
import windows98 from "./windows98.gif"
import "./index.css"

export const Home: React.FC = (props) => {
    return (
        <AppLayout>
            <div className="home-wrapper">
                <p className="welcome-text">
                    Welcome to <strong>98todolist.</strong>
                    <br />Whatever you put into here
                    <br />will save *locally* until you 
                    <br />delete it or you finish it!
                </p>
                <button onClick={(e) => {window.location.hash="/todos"}} className="enter-button">Enter</button>
                <img className="pipes-gif" alt="windows 98 design" src={windows98} />
            </div>
        </AppLayout>
    )
}