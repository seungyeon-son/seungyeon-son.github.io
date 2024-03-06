import React from "react";
import { useParams } from "react-router-dom";
import { ArchiveList } from "./constants";
import styled from "styled-components";

function Archive() {
  const subPageName = "Archive";
  const { archivetId } = useParams();

  const ArchiveListMap = ArchiveList.map((archive) => {
    if (!archive) {
      return <div>archive not found</div>;
    }

    return (
      <ListItem key={archive.archiveId}>
        <a href={archive.archiveLink} target="_blank" rel="noreferrer">
          <ArchiveCover>
            <ArchiveCoverImg archiveImg={archive.archiveImg} />
            <img src={archive.archiveImg} alt="Archive Cover" />
          </ArchiveCover>
          <div className="con-main-title">{archive.archiveTitle}</div>
          <div className="con-main-content">{archive.archiveContent}</div>
          <span className="con-sub-name">{archive.archiveTag.tag1}</span>
          <span className="con-sub-date">{archive.archiveDate}</span>
        </a>
      </ListItem>
    );
  });

  return (
    <React.Fragment>
      <div>{ArchiveListMap}</div>
    </React.Fragment>
  );
}

const ArchiveCoverImg = styled.div`
  background: url(${({ archiveImg }) => archiveImg}) no-repeat center / cover;
`;

const ArchiveCover = styled.div``;
const ListItem = styled.li``;

export default Archive;
