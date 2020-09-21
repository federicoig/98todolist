import React from 'react';
import { WindowLayout } from "./components/WindowLayout/index";
import { TodoCreator } from "./components/TodoCreator/index"
import "./App.css";
import "98.css";

function App() {
  return (
    <div className="App">
        <WindowLayout>
            <TodoCreator />
        </WindowLayout>
    </div>
  );
}

export default App;
