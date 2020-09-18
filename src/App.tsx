import React from 'react';
import { WindowLayout } from "./components/WindowLayout/index";
import { TodoWrapper } from "./components/TodoWrapper/index"
import "./App.css";
import "98.css";

function App() {
  return (
    <div className="App">
        <WindowLayout>
            <TodoWrapper />
        </WindowLayout>
    </div>
  );
}

export default App;
