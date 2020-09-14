import React from 'react';
import { WindowLayout } from "./components/WindowLayout/index";
import { TodoInput } from "./components/TodoInput/index"
import "./app.css";
import "98.css";
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
        <WindowLayout>
            <TodoInput />
        </WindowLayout>
    </div>
  );
}

export default App;
