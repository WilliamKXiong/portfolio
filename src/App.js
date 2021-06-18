//import './App.css';
import Home from './Pages/Home/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
