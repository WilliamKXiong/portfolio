import {
    Route,
    Router,
    Switch
} from 'react-router-dom';
import NavigationBar from 'Components/NavingationBar/NavigationBar';
import Home from 'Pages/Home/Home';
import About from 'Pages/About/About';
import Footer from 'Components/Footer/Footer';
import {createHashHistory} from 'history';

const history = createHashHistory();

const App: React.FC = () => {
    return (
        <Router history={history}>
            <NavigationBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default App;