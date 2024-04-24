import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <PanelWrap>
      <Panel>
        <Board>
          <h1>
            <p>UI DEVELOPER</p>
            <p>Published WEB.</p>
          </h1>
        </Board>
      </Panel>
      <Panel>
        <Board></Board>
      </Panel>
      <Panel></Panel>
    </PanelWrap>
  );
}

export default Main;
const PanelWrap = styled.div`
  background: #000;
`;
const Board = styled.div`
  width: calc(100% - 96px);
  height: calc(100% - 48px);
  border-radius: 12px;
  box-sizing: border-box;
`;
const Panel = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid orange;
  ${Board} {
    &:nth-child(1) {
      background: #e2e2e2;
      display: flex;
      align-items: end;
      padding: 32px 24px;
    }
    &:nth-child(2) {
      background: #f4efe9;
    }
    &:nth-child(3) {
      background: #ddd;
    }
  }
`;
