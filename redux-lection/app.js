const { createStore } = require('redux');

const INITIAL_STATE = {
    hello: 'world',
    counter: 0,
};

const ACTION_SET = 'set';
const ACTION_INC = 'inc';
const ACTION_DEC = 'dec';

function inc() {
    return { type: ACTION_INC };
}

function set(value) {
    return { type: ACTION_SET, payload: value };
}

const store = createStore((state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_INC:
            return { ...state, counter: state.counter + 1 };
        case ACTION_DEC:
            return { ...state, counter: state.counter - 1 };
        case ACTION_SET:
            return { ...state, counter: payload };
        default:
            return state;
    }
});

console.log(store.getState());

store.dispatch(set(10));

console.log(store.getState());
