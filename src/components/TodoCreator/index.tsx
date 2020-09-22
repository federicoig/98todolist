import React, { useState } from "react";
import store from "store";
import { Todo } from "../Todo/index";
import "98.css";
import "./index.css";

type todo = {activity: string, key: number}

export const TodoCreator: React.FC = (props) => {
    const [input, setInput] = useState("");
    const todos: todo[] = []

    store.each( (value: string, key: string) => 
        todos.push( {activity: value, key: Number(key)} ))

    return (
        <form onSubmit={ (e) => {
            if (input !== "") {
                store.set(Date.now(), input);
                setInput("");
            }
            e.preventDefault(); }} className="field-row">
            <label id="text17">What are your plans for today...? <br />*don't write sensitive data*</label>
            <input id="text17" 
                autoComplete="off"
                type="text"
                value={input}
                onChange={ (event) => { setInput(event.target.value) }}
            />
            <button type="submit">Add</button>
            <div className="todo-wrapper">
                { todos[0] ? todos.map( todo => 
                    <Todo activity={todo.activity} index={todo.key} key={todo.key}/> ) : "" 
                }
            </div>
        </form>
    );
};