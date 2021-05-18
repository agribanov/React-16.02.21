import * as yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import { Form, Formik } from 'formik';
import React from 'react';
import FormikTextField from '../common/form/FormikTextField';
import FormikButton from '../common/form/FormikButton';
import { connect } from 'react-redux';
import { addTodo } from '../../store/todos/actions';
import { useHistory } from 'react-router';
import FormikSelect from '../common/form/FormikSelect';
import { createTodoValidationSchema } from '../validation/createTodoValidationSchema';

const FORM_INITIAL_VALUES = {
    title: 'New Todo',
    isDone: false,
};

const IS_DONE_OPTIONS = [
    { value: false, label: 'No' },
    { value: true, label: 'Yes' },
];

function NewTodoDialog({ addTodo }) {
    const history = useHistory();

    function closeForm() {
        history.push('/todos');
    }

    function onSubmit(values) {
        addTodo(values);
        closeForm();
    }

    return (
        <Dialog open={true} onClose={closeForm} maxWidth="xs" fullWidth>
            <Formik
                initialValues={FORM_INITIAL_VALUES}
                validationSchema={createTodoValidationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <DialogTitle>Create Tofo</DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth>
                            <FormikTextField name="title" label="Title" />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <FormikSelect
                                name="isDone"
                                label="Completed"
                                options={IS_DONE_OPTIONS}
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <FormikButton>Create</FormikButton>
                        <Button onClick={closeForm} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
}

const mapDispatchToProps = {
    addTodo,
};

export default connect(null, mapDispatchToProps)(NewTodoDialog);
