import propTypes from '../../prop-types';
import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Divider,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function TodoListItem({ todo, toggleTodo, removeTodo }) {
    return (
        <>
            <ListItem button onClick={() => toggleTodo(todo.id)}>
                <ListItemIcon>
                    {todo.isDone ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
                </ListItemIcon>
                <ListItemText primary={todo.title} />
                {removeTodo && (
                    <ListItemSecondaryAction
                        onClick={(e) => {
                            e.preventDefault();
                            removeTodo(todo.id);
                        }}
                    >
                        <DeleteIcon />
                    </ListItemSecondaryAction>
                )}
            </ListItem>
            <Divider />
        </>
    );
}

TodoListItem.propTypes = {
    todo: propTypes.todoListItem,
    toggleTodo: propTypes.func.isRequired,
    removeTodo: propTypes.func,
};

console.log(propTypes);

export default TodoListItem;
