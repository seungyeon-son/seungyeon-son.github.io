import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArchiveList } from "./constants";
import styled from "styled-components";
import ArchiveDetail from "./ArchiveDetail";

function Archive() {
  const subPageName = "Archive";
  const { archivetId } = useParams();

  const ArchiveListMap = ArchiveList.map((archive) => {
    if (!archive) {
      return <div>archive not found</div>;
    }

    return (
      <ListItem key={archive.id}>
        <Link to={`/archive/${archive.archivetId}`}>
          <ArchiveCover>
            <ArchiveCoverImg archiveImg={archive.archiveImg} />
            <img src={archive.archiveImg} alt="Archive Cover" />
          </ArchiveCover>
          <div className="con-main-title">{archive.archiveTitle}</div>
          <div className="con-main-content">{archive.archiveContent}</div>
          <span className="con-sub-name">{archive.archiveTag.tag1}</span>
          <span className="con-sub-date">{archive.archiveDate}</span>
        </Link>
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
