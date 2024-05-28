import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0 40px;

    a {
      color: #fff;
      text-decoration: none;
      font-family: "PyeongChang-Bold";
    }
  }
`;
