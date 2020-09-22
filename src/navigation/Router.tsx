import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
import { TodoList } from "../views/TodoList"

export const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route name="home" exact path="/" component={Home}/>
                <Route name="todos" exact path="/todos" component={TodoList}/>
            </Switch>
        </BrowserRouter>
    )
}
