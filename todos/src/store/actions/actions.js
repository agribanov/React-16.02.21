export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export function deleteTodo(id) {
    return { type: ACTION_DELETE_TODO, payload: id };
}
