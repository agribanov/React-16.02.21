import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo, fetchTodos } from '../../store/todos/actions';
import { FILTER_DONE, FILTER_NOT_DONE } from '../../filters';

function TodosList({ todos, removeTodo, toggleTodo, fetchTodos }) {
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);
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
function mapStateToProps(state) {
    let todos = state.todos.items;

    switch (state.filter) {
        case FILTER_DONE:
            todos = todos.filter((todo) => todo.isDone);
            break;
        case FILTER_NOT_DONE:
            todos = todos.filter((todo) => !todo.isDone);
            break;
        default:
        // todos = todos;
    }

    return {
        todos,
    };
}

const mapDispatchToProps = {
    removeTodo,
    toggleTodo,
    fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
