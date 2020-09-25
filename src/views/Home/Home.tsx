import React from "react";
import { AppLayout } from "../../layouts";
import windows98 from "./windows98.mp4"
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
                <video autoPlay loop muted playsInline className="pipes-gif" src={windows98} />
            </div>
        </AppLayout>
    )
}