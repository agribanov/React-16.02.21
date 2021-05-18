import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import store from './store';

import Todos from './components/todos/Todos';
import { Box, Button } from '@material-ui/core';

function App() {
    return (
        <Router>
            <Container maxWidth="md">
                <Provider store={store}>
                    <Switch>
                        <Route path="/todos" component={Todos} />
                        <Route path="*">
                            <Redirect to="/todos" />
                        </Route>
                    </Switch>
                </Provider>
            </Container>
        </Router>
    );
}

export default App;
