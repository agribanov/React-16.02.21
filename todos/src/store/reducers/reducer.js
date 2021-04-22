import { ACTION_DELETE_TODO } from '../actions/actions';

const INITIAL_STATE = {
    list: [
        { id: 2, title: 'dasdfsaf', isDone: true },
        { id: 3, title: '33333', isDone: false },
    ],
    filtet: 'all',
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        default:
            return state;
    }
}
