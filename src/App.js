//import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavingationBar from './Components/NavingationBar/NavingationBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import JavaBattleshipGame from './Pages/Java-Battleship-Game/JavaBattleshipGame';

function App() {
  return (
    <Router>
      <NavingationBar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/Java-Battleship-Game"> <JavaBattleshipGame /> </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

/*

      <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
      */
