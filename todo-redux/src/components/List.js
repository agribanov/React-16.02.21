import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import api from '../api';

function TodosList({ todos, removeTodo, toggleTodo }) {
    return (
        <List component="nav" aria-label="main">
            {todos.map((todo) => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
}

export default TodosList;
