type BaseEntity = {
  uuid: string;
  alternativeDate: AlternativeDate[];
  genre: Genre[];
  images: Image[];
  lastUpdated: string;
  tags: Tag[];
  targetAudience: TargetAudience[];
};

type AlternativeDate = {
  type: string;
  value: string;
};

type Genre = {
  type: string;
  value: string;
};

export type Image = {
  checksum: string;
  locale: string;
  name: string;
  size: string;
  usage: "Scene" | "Background" | "Cover" | "BOXART";
  url: string;
  isEditorial: string;
};

type LocalizableInformation = {
  locale: string;
  alternativeTitle: Array<{ type: string; value: string }>;
  synopsis: Array<{ type: string; value: string }>;
  title: string;
  seasonNumber?: string;
  episodeNumber?: string;
};

type Tag = {
  type: string;
  value: string;
};

type TargetAudience = {
  type: string;
  value: string;
};

export type ProgrammeData = BaseEntity & {
  fragmentType: "PROGRAMME";
  durationSeconds: string;
  lastInSeason: boolean;
  localizableInformation: LocalizableInformation[];
  parentType: string;
  parentUuid: string;
};

export type SerieData = BaseEntity & {
  fragmentType: "SERIES";
  localizableInformation: LocalizableInformation[];
  isNeverMissFlag: boolean;
};

export type SeasonData = BaseEntity & {
  fragmentType: "SEASON";
  localizableInformation: LocalizableInformation[];
  parentType: string;
  parentUuid: string;
};
