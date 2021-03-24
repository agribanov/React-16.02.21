import { useEffect } from 'react';
import { useAsync } from '../common/hooks';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from './services/todosService';

export function useTodos(search) {
    const { status, data: list, setData: setList, run } = useAsync(
        () => getTodos(search),
        []
    );

    useEffect(run, [search]);

    function toggleItem(id) {
        const item = list.find((l) => l.id === id);
        const newItem = { ...item, completed: !item.completed };

        updateTodo(newItem).then(() => {
            setList(list.map((item) => (item.id !== id ? item : newItem)));
        });
    }

    function deleteItem(id) {
        deleteTodo(id);

        setList(list.filter((item) => item.id !== id));
    }

    function createItem(newItem) {
        newItem.completed = false;

        createTodo(newItem).then((data) => {
            setList([...list, data]);
        });
    }

    return {
        status,
        list,
        toggleItem,
        deleteItem,
        createItem,
    };
}
