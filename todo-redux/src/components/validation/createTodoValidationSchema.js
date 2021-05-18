import * as yup from 'yup';

export const createTodoValidationSchema = yup.object().shape({
    title: yup.string().required().max(255).label('Title'),
    isDone: yup.boolean().required(),
});
