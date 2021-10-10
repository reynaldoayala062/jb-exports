import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/index'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" components={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
