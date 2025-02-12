/**
 * SERIE
 * id
 * title
 * subtitle [{type: "short", value: ""}, {type: "long", value: ""}]
 * images [{usage: "Scene" | "Background" | "Cover", url: string}]
 * tags ?
 * genre ?
 */

/**
 * STAGIONE
 * id
 * title
 * subtitle [{type: "short", value: ""}, {type: "long", value: ""}]
 * images [{usage: "Scene" | "Background" | "Cover", url: string}]
 * parentId
 * seasonNumber
 * tags ?
 * genre ?
 */

/**
 * PROGRAMME
 * id
 * title
 * subtitle [{type: "short", value: ""}, {type: "long", value: ""}]
 * images [{usage: "Scene" | "Background" | "Cover", url: string}]
 * parentId
 * durationSeconds
 * episodeNumber
 * tags ?
 * genre ?
 */

type Genre = {
  type: string;
  value: string;
};

type Tag = {
  type: string;
  value: string;
};

export type BaseEntity = {
  uuid: string;
  title: string;
  subtitle: Array<{ type: "short" | "medium" | "long"; value: string }>;
  images: Array<{ usage: "Scene" | "Background" | "Cover"; url: string }>;
  genre: Genre[];
  tags: Tag[];
};

export type SerieData = BaseEntity;

export type SeasonData = BaseEntity & {
  parentUuid: string;
  seasonNumber: string;
};

export type ProgrammeData = BaseEntity & {
  parentUuid: string;
  durationSeconds: string;
  episodeNumber: string;
};
