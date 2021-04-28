import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import store from './store';
import Filters from './components/Filters';
import List from './components/ListContainer';
import Form from './components/Form';
import { fetchTodos } from './store/todos/actions';

store.dispatch(fetchTodos());
function App() {
    return (
        <Container maxWidth="md">
            <Provider store={store}>
                <Filters />
                <List />
                <Form />
            </Provider>
        </Container>
    );
}

export default App;
