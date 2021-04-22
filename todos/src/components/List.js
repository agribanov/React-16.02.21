import { connect } from 'react-redux';
import React from 'react';
import { deleteTodo } from '../store/actions/actions';

function List({ todos, dispatch }) {
    function handleDeleteTodo(id) {
        dispatch(deleteTodo(id));
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => handleDeleteTodo(todo.id)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

function mapsStateToProps(state) {
    return { todos: state.list };
}

export default connect(mapsStateToProps)(List);