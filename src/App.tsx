//import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavingationBar from './Components/NavingationBar/NavingationBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Animate from './Pages/Animate/Animate';
import Footer from './Components/Footer/Footer';
import { createHashHistory } from 'history';

const history = createHashHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <NavingationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/animate">
          <Animate />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;




/*

      <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
      */
