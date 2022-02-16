import './App.css';
import Home from './component/Home.js';
import About from './component/About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" exact component={About}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
