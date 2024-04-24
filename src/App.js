import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Archive from "./pages/archive/ArchivePage";
import Main from "./pages/main/MainPage";
import styled from "styled-components";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <NavMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
        </ul>
      </NavMenu>{" "}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;

const NavMenu = styled.nav`
  position: fixed;
  top: 56px;
  right: 84px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0 12px;
    width: 120px;
    height: 36px;
    position: relative;
    z-index: 1;
    border-radius: 8px;
    border: 1px solid #fefefe;
    overflow: hidden;
    &::after {
      display: block;
      content: "";
      width: 120px;
      height: 36px;
      background: #000;
      filter: blur(14px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    display: flex;
    align-items: center;
    gap: 16px;
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
