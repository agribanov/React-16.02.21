import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/actions';
import List from './List';
import { FILTER_DONE, FILTER_NOT_DONE } from '../filters';

function mapStateToProps(state) {
    let todos = state.todos.items;

    switch (state.filter) {
        case FILTER_DONE:
            todos = todos.filter((todo) => todo.isDone);
            break;
        case FILTER_NOT_DONE:
            todos = todos.filter((todo) => !todo.isDone);
    }

    return {
        todos,
    };
}

const mapDispatchToProps = {
    removeTodo,
    toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
