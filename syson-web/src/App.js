import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Archive from "./components/Archive";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <Router>
        <Switch>
          <Route path="/archive" component={Archive} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
