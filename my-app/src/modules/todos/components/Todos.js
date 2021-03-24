import React, {
    Component,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useAsync, useLocalStorage } from '../../common/hooks';
import { useTodos } from '../hooks';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../services/todosService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosFilter from './TodosFilter';

export default function Todos() {
    const [filter, setFilter] = useLocalStorage('filter', 'all');
    const [search, setSearch] = useLocalStorage('search');

    const { status, list, toggleItem, deleteItem, createItem } = useTodos(
        search
    );

    const filteredList = useMemo(() => {
        if (filter !== 'all') {
            return list.filter(
                (item) =>
                    (filter === 'done' && item.completed) ||
                    (filter === 'notdone' && !item.completed)
            );
        } else {
            return list;
        }
    }, [filter, list]);

    return (
        <>
            <TodosFilter
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearch={setSearch}
            />
            {status === 'LOADING' ? (
                'Loading...'
            ) : status === 'DONE' ? (
                <TodoList
                    list={filteredList}
                    onToggle={toggleItem}
                    onDelete={deleteItem}
                />
            ) : null}

            <TodoForm onSave={createItem} />
        </>
    );
}
