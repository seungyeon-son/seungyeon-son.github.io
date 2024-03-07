import React from "react";
import { useParams } from "react-router-dom";
import { ArchiveList } from "./constants";

const ArchiveDetail = () => {
  const { archiveId } = useParams(); // 아카이브 ID
  const archive = ArchiveList.find((item) => item.archiveId === archiveId); // 해당 ID에 해당하는 아카이브

  if (!archive) {
    return <div>해당 아카이브를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{archive.archiveTitle}</h2>
      <p>{archive.archiveContent}</p>
      <span>{archive.archiveTag.tag1}</span>
      <span>{archive.archiveDate}</span>
      <img src={archive.archiveImg} alt="Archive Cover" />
      디테일페이지
    </div>
  );
};

export default ArchiveDetail;
