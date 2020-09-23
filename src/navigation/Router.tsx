import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
import { TodoList } from "../views/TodoList"

export const Router: React.FC = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/todos" component={TodoList}/>
            </Switch>
        </HashRouter>
    )
}
