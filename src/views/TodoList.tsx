import React from "react";
import { TodoCreator } from "../components/TodoCreator";
import { AppLayout } from "../layouts";

export const TodoList: React.FC = (props) => {
    return (
        <AppLayout>
            <TodoCreator />
        </AppLayout>
    )
}