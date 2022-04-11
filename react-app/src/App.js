import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />   
      <Route path="/about" exact component={About} />
    </Switch>
  </Router>
  );
}

export default App;
