import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Filters from './Filters';
import List from './List';
import NewTodoDialog from './NewTodoDialog';
function Todos() {
    const { path } = useRouteMatch();

    return (
        <>
            <Filters />
            <List />
            <Button component={Link} startIcon={<AddIcon />} to="/todos/add">
                New todo
            </Button>
            <Route path={`${path}/add`} exact component={NewTodoDialog} />
        </>
    );
}

export default Todos;
