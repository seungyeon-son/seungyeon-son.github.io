import React from "react";
import { ArchiveList } from "./constants";
import styled from "styled-components";

function Archive() {
  const subPageName = "Archive";

  const ArchiveListMap = ArchiveList.map((archive) => {
    return (
      <ListItem>
        <a href={archive.archiveLink} target="_blank" rel="noreferrer">
          <ArchiveCover>
            <ArchiveCoverImg archiveImg={archive.archiveImg} />
            img
          </ArchiveCover>
          <div className="con-main-title">{archive.archiveTitle}title</div>
          <div className="con-main-content">{archive.archiveContent}content</div>
          <span className="con-sub-name">{archive.archiveTag.tag1}tag</span>
          <span className="con-sub-date">{archive.archiveDate}date</span>
        </a>
      </ListItem>
    );
    if (!archive) {
      return <div>archive not found</div>;
    }
  });
  return <>{ArchiveListMap}</>;
}

const ArchiveCoverImg = styled.div<{ blogImg: string }>`
  background: url(${({ blogImg }) => blogImg}) no-repeat center / cover;
`;

const ArchiveCover = styled.div``;
const ListItem = styled.li``;
export default Archive;
