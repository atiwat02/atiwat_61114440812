import logo from './logo.svg';
import './App.css';
import Data from './data.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>


        <Switch>
          <Route exact path="/">
            <Redirect to="/data" />
          </Route>
          <Route path="/data">
            <Data/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
