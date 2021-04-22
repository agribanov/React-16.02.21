import { Provider } from 'react-redux';
import List from './components/List';

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <List />;
        </Provider>
    );
}

export default App;
