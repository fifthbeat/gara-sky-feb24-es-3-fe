import { ProgrammeData, SeasonData, SerieData } from "./types";

export const mockSerie: SerieData = {
  uuid: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
  title: "Serie A Basket",
  subtitle: [
    { type: "short", value: "Le sfide del massimo campionato di basket italiano." },
    { type: "medium", value: "Le sfide del massimo campionato di basket italiano." },
    { type: "long", value: "Le sfide del massimo campionato di basket italiano." },
  ],
  images: [
    {
      usage: "Background",
      url: "http://it.imageservice.sky.com/uuid/8980dd13-ee24-42b3-b4b8-0b9fc59ab821/background",
    },
    {
      usage: "Scene",
      url: "http://it.imageservice.sky.com/uuid/8980dd13-ee24-42b3-b4b8-0b9fc59ab821/16-9",
    },
    {
      usage: "Cover",
      url: "http://it.imageservice.sky.com/uuid/8980dd13-ee24-42b3-b4b8-0b9fc59ab821/cover",
    },
  ],
  genre: [
    { type: "epgGenres", value: "sport" },
    { type: "epgSubGenres", value: "basket" },
    { type: "recommendationGenres", value: "sport" },
    { type: "microGenres", value: "basket" },
  ],
  tags: [
    { type: "ee", value: "Avvincenti" },
    { type: "ee", value: "Spettacolari" },
    { type: "ee", value: "Competitivi" },
    { type: "ee", value: "Anni 2010" },
    { type: "ee", value: "XXI Secolo" },
    { type: "ee", value: "Italia" },
    { type: "ee", value: "Sport" },
    { type: "ee", value: "Vittoria" },
    { type: "ee", value: "Sconfitta" },
    { type: "ee", value: "Squadra" },
    { type: "ee", value: "Gioco di squadra" },
    { type: "ee", value: "Campionato" },
    { type: "ee", value: "Serie A Basket" },
  ],
};

export const mockProgramme: ProgrammeData = {
  uuid: "f0f535f1-9f40-4611-a1e2-d04ba653b0d3",
  durationSeconds: "9000",
  genre: [
    {
      type: "epgGenres",
      value: "sport",
    },
    {
      type: "epgSubGenres",
      value: "basket",
    },
    {
      type: "recommendationGenres",
      value: "sport",
    },
    {
      type: "recommendationGenres",
      value: "other",
    },
    {
      type: "microGenres",
      value: "basket",
    },
  ],
  images: [
    {
      usage: "Scene",
      url: "http://it.imageservice.sky.com/uuid/f0f535f1-9f40-4611-a1e2-d04ba653b0d3/16-9",
    },
    {
      usage: "Background",
      url: "http://it.imageservice.sky.com/uuid/f0f535f1-9f40-4611-a1e2-d04ba653b0d3/background",
    },
    {
      usage: "Cover",
      url: "http://it.imageservice.sky.com/uuid/f0f535f1-9f40-4611-a1e2-d04ba653b0d3/cover",
    },
  ],
  title: "Napoli - Derthona",
  episodeNumber: "18",

  subtitle: [
    {
      type: "medium",
      value:
        "Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succederà ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
    {
      type: "long",
      value:
        "Serie A: Napoli - Derthona. 14a g. - Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succedera' ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
    {
      type: "short",
      value:
        "Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succederà ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
  ],
  parentUuid: "42a97c81-2ec0-4563-a122-1fd3140ca537",
  tags: [
    {
      type: "ee",
      value: "Avvincenti",
    },
    {
      type: "ee",
      value: "Spettacolari",
    },
    {
      type: "ee",
      value: "Competitivi",
    },
    {
      type: "ee",
      value: "Anni 2020",
    },
    {
      type: "ee",
      value: "Anni 2010",
    },
    {
      type: "ee",
      value: "XXI Secolo",
    },
    {
      type: "ee",
      value: "Europa",
    },
    {
      type: "ee",
      value: "Italia",
    },
    {
      type: "ee",
      value: "Campo da gioco",
    },
    {
      type: "ee",
      value: "Allenatore",
    },
    {
      type: "ee",
      value: "Sportivo professionista",
    },
    {
      type: "ee",
      value: "Campione",
    },
    {
      type: "ee",
      value: "Pubblico",
    },
    {
      type: "ee",
      value: "Arbitro",
    },
    {
      type: "ee",
      value: "All",
    },
    {
      type: "ee",
      value: "Sport",
    },
    {
      type: "ee",
      value: "Vittoria",
    },
    {
      type: "ee",
      value: "Sconfitta",
    },
    {
      type: "ee",
      value: "Squadra",
    },
    {
      type: "ee",
      value: "Gioco di squadra",
    },
    {
      type: "ee",
      value: "Spettacolo",
    },
    {
      type: "ee",
      value: "Attività sportiva",
    },
    {
      type: "ee",
      value: "Competizione sportiva",
    },
    {
      type: "ee",
      value: "Campionato",
    },
    {
      type: "ee",
      value: "Gioco",
    },
    {
      type: "ee",
      value: "Performance",
    },
    {
      type: "ee",
      value: "Gara",
    },
    {
      type: "ee",
      value: "Serie A Basket",
    },
  ],
};

export const mockSeason: SeasonData = {
  uuid: "42a97c81-2ec0-4563-a122-1fd3140ca537",
  genre: [
    {
      type: "epgGenres",
      value: "sport",
    },
    {
      type: "epgSubGenres",
      value: "basket",
    },
    {
      type: "recommendationGenres",
      value: "sport",
    },
    {
      type: "microGenres",
      value: "basket",
    },
  ],
  title: "Serie A",
  images: [
    {
      usage: "Scene",
      url: "http://it.imageservice.sky.com/uuid/42a97c81-2ec0-4563-a122-1fd3140ca537/16-9",
    },
    {
      usage: "Background",
      url: "http://it.imageservice.sky.com/uuid/42a97c81-2ec0-4563-a122-1fd3140ca537/background",
    },
    {
      usage: "Cover",
      url: "http://it.imageservice.sky.com/uuid/42a97c81-2ec0-4563-a122-1fd3140ca537/cover",
    },
  ],
  seasonNumber: "2024",
  subtitle: [
    {
      type: "medium",
      value:
        "Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succederà ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
    {
      type: "long",
      value:
        "Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succedera' ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
    {
      type: "short",
      value:
        "Si parte domenica 29 settembre, si chiude domenica 11 maggio, prima del ballo finale dei playoff. Chi succederà ai campioni d'Italia in carica dell'Olimpia Milano?",
    },
  ],
  parentUuid: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
  tags: [
    {
      type: "ee",
      value: "Avvincenti",
    },
    {
      type: "ee",
      value: "Spettacolari",
    },
    {
      type: "ee",
      value: "Competitivi",
    },
    {
      type: "ee",
      value: "Anni 2020",
    },
    {
      type: "ee",
      value: "Anni 2010",
    },
    {
      type: "ee",
      value: "XXI Secolo",
    },
    {
      type: "ee",
      value: "Europa",
    },
    {
      type: "ee",
      value: "Italia",
    },
    {
      type: "ee",
      value: "Campo da gioco",
    },
    {
      type: "ee",
      value: "Allenatore",
    },
    {
      type: "ee",
      value: "Sportivo professionista",
    },
    {
      type: "ee",
      value: "Campione",
    },
    {
      type: "ee",
      value: "Pubblico",
    },
    {
      type: "ee",
      value: "Arbitro",
    },
    {
      type: "ee",
      value: "All",
    },
    {
      type: "ee",
      value: "Sport",
    },
    {
      type: "ee",
      value: "Vittoria",
    },
    {
      type: "ee",
      value: "Sconfitta",
    },
    {
      type: "ee",
      value: "Squadra",
    },
    {
      type: "ee",
      value: "Gioco di squadra",
    },
    {
      type: "ee",
      value: "Spettacolo",
    },
    {
      type: "ee",
      value: "Attività sportiva",
    },
    {
      type: "ee",
      value: "Competizione sportiva",
    },
    {
      type: "ee",
      value: "Campionato",
    },
    {
      type: "ee",
      value: "Gioco",
    },
    {
      type: "ee",
      value: "Performance",
    },
    {
      type: "ee",
      value: "Gara",
    },
    {
      type: "ee",
      value: "Serie A Basket",
    },
  ],
};

export const allEntities = [mockProgramme, mockSeason, mockSerie];
