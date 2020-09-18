import React, { useState } from "react";
import { Todo } from "../Todo/index";
import "98.css";
import "./index.css";

type todo = {activity: string, key: number}

let todos: todo[] = []

export const TodoWrapper: React.FC = (props) => {
    
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0)

    return (
        <form onSubmit={ (e) => {
            if (input !== "") {
                setCount(count + 1)
                todos.push({
                    activity: input,
                    key: count
                });
                console.log(todos)
                setInput("")
            }
            e.preventDefault(); }} className="field-row">
            <label id="text17">What are your plans for today...?</label>
            <input id="text17" 
                autoComplete="off"
                type="text"
                value={input}
                onChange={ (event) => { setInput(event.target.value) }}
            />
            <button type="submit">Add</button>
            <div className="todo-wrapper">
                {todos.map((todo: any) => <Todo item={todo.activity} key={todo.key} />
                )}
            </div>
        </form>
    );
};