import useSWR from "swr";
import { mockProgramme, mockSeason, mockSerie } from "./mock";
import { ProgrammeData, SeasonData, SerieData } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Response<TData> = {
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
};

export function useGetAllSeries(): Response<SerieData[]> {
  const { data, error, isLoading } = useSWR<SerieData[]>(`/api/series`, fetcher);

  return {
    // data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: [
      mockSerie,
      {
        ...mockSerie,
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
      },
    ],
  };
}

export function useGetSerieById(id: string): Response<SerieData> {
  const { data, error, isLoading } = useSWR<SerieData>(`/api/series/${id}`, fetcher);

  return {
    // data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: mockSerie,
  };
}

export function useGetAllSeasonBySerieId(serieId: string): Response<SeasonData[]> {
  const { data, error, isLoading } = useSWR<SerieData[]>(`/api/series/${serieId}/season`, fetcher);

  return {
    // data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: [mockSeason, mockSeason, mockSeason, mockSeason],
  };
}

export function useGetSeasonById(id: string): Response<SeasonData> {
  const { data, error, isLoading } = useSWR<SerieData[]>(`/api/season/${id}`, fetcher);

  return {
    // data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: mockSeason,
  };
}

export function useGetAllProgrammeBySeasonId(seasonId: string): Response<ProgrammeData[]> {
  const { data, error, isLoading } = useSWR<SerieData[]>(`/api/season/${seasonId}/programme`, fetcher);

  return {
    // data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: [mockProgramme],
  };
}

export function useGetProgrammeById(id: string): Response<ProgrammeData> {
  const { data, error, isLoading } = useSWR<ProgrammeData>(`/api/programme/${id}`, fetcher);

  return {
    // serie: data,
    // isLoading,
    // isError: error,
    isLoading: false,
    isError: false,
    data: mockProgramme,
  };
}
