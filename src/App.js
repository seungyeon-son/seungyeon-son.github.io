import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Archive from "./pages/archive/ArchivePage";
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
        <Route path="/archive" component={Archive} />
      </Router>
    </>
  );
}

export default App;
