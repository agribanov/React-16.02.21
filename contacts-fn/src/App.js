import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './modules/about/components/About';

import Contacts from './modules/contacts/components/Contacts';
import Home from './modules/Home';
import ThemeToggler from './modules/ui/components/ThemeToggler';

function App() {
    return (
        <Router>
            <ThemeToggler />
            <div>
                <Link to="/contacts">Contacts</Link>|
                <Link to="/about">about</Link>|<Link to="/home">home</Link>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default App;
