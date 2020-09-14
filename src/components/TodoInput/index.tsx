import React, { useState } from "react";
import "98.css";
import "./index.css";

export const TodoInput: React.FC = (props) => {
    const [input, setInput] = useState("");

    return (
        <form onSubmit={ (e) => { 
            if (input !== "") {
                setInput("")            
            }
            e.preventDefault();

            }} className="field-row">
            <label id="text17">What are your plans for today...?</label>
            <input id="text17" type="text"
                value={input}
                onChange={ (event) => { setInput(event.target.value) }}
            />
            <button type="submit">Add</button>
        </form>
    );
};