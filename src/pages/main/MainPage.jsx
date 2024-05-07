import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <PanelWrap>
      <Panel>
        <h1>WEB Publishing / UI Developer</h1>
        <p>
          I'm working as a web publisher, and I'm currently studying frontend development. I love thinking about cool
          designs and bringing them to life. I'm always putting in effort to improve and grow. .
        </p>
      </Panel>
    </PanelWrap>
  );
}

export default Main;
const PanelWrap = styled.div`
  background: no-repeat center/100% url("../../../images/main/background.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: #fff;
`;
const Board = styled.div`
  width: calc(100% - 96px);
  height: calc(100% - 48px);
  border-radius: 12px;
  box-sizing: border-box;
`;
const Panel = styled.div``;
