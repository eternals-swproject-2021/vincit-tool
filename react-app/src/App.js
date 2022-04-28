import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Services from './pages/services/Services.js';
import Document from './pages/document/Document.js'
import Contact from './pages/contact/Contact.js';

function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />   
      <Route path="/home" exact component={Home} />   
      <Route path="/about" exact component={About} />
      <Route path="/services" exact component={Services} />
      <Route path="/document" exact component={Document} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Router>
  );
}

export default App;
