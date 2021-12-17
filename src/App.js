import './App.css';
import Home from './component/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
