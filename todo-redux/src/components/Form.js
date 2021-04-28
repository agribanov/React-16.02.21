import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { addTodo } from '../store/todos/actions';
import { connect } from 'react-redux';

const initialValues = {
    title: '',
    isDone: false,
};

function TodoForm({ addTodo }) {
    const [values, setValues] = useState(initialValues);

    function onFormSubmit(e) {
        e.preventDefault();
        addTodo(values);

        resetForm();
    }

    function resetForm() {
        setValues(initialValues);
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    return (
        <form autoComplete="off" onSubmit={onFormSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <TextField
                        placeholder="Title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit" variant="contained">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = {
    addTodo: addTodo,
};

export default TodoForm;
