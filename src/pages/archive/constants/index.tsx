type ArchiveTag = {
  tag1: string;
  tag2: string;
  tag3: string;
};

type archiveCoverImg = {
  img: string;
};

type Archive = {
  archiveId: string;
  archiveLink: string;
  archiveTitle: string;
  archiveContent: string;
  archiveTag: ArchiveTag;
  archiveDate: string;
  archiveCoverImg: archiveCoverImg;
};

export const ArchiveList: Archive[] = [
  {
    archiveId: "",
    archiveLink: "",
    archiveTitle: "Project name 01",
    archiveContent: "Project context",
    archiveTag: {
      tag1: "Tag01",
      tag2: "Tag02",
      tag3: "Tag03",
    },
    archiveDate: "2024.03.06.",
    archiveCoverImg: { img: "" },
  },
];
