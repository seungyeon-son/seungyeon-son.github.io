import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <PanelWrap>
      <Panel>
        <FileMainShape>
          <h1>
            <p>UI DEVELOPER</p>
            <p>Published WEB.</p>
          </h1>
        </FileMainShape>
      </Panel>
      <Panel>
        <Board>
          <FileShape></FileShape>
        </Board>
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
const FileShape = styled.div`
  //TODO: w, h 값 유동 집어넣기
  width: 100%;
  height: 500px;
  background-image: url("../../../../images/file-shape.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;
const FileMainShape = styled.div`
  //TODO: w, h 값 유동 집어넣기
  width: calc(100% - 56px);
  height: 100%;
  background-image: url("../../../../images/file-main-shape.svg");
  background-size: 100% 85%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: end;
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
