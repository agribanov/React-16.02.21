import React, { useContext, useState } from 'react';
import { useUser } from '../../common/contexts/userContext';

export default function TodoForm({ onSave }) {
    const [todo, setTodo] = useState({ title: '' });

    const { user } = useUser();

    function onFormSubmit(e) {
        e.preventDefault();

        onSave(todo);
        setTodo({ title: '' });
    }

    function onInputChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button> {user ? user.name : 'Anonym'} Save</button>
        </form>
    );
}
