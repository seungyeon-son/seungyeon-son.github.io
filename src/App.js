import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Archive from "./pages/archive/ArchivePage";
import Main from "./pages/main/MainPage";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
