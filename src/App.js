// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./components/Archive";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Archive} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
