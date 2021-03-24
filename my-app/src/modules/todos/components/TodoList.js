import React, { useContext } from 'react';
import { useUser } from '../../common/contexts/userContext';
import TodoListItem from './TodoListItem';

export default function TodoList({ list, onToggle, onDelete }) {
    const { isLoggedIn, login, logout } = useUser();

    return (
        <ul>
            {list.map((item) => (
                <TodoListItem
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
            {isLoggedIn ? (
                <li onClick={logout}>Logout</li>
            ) : (
                <li onClick={login}>Login</li>
            )}
        </ul>
    );
}
