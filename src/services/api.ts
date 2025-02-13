import useSWR from "swr";
import { ProgrammeData, SeasonData, SerieData } from "./types";

const fetcher = (url: string) => fetch(`${import.meta.env.VITE_BASE_PATH}${url}`).then((res) => res.json());

type Response<TData> = {
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
};

export function useGetAllSeries(): Response<SerieData[]> {
  const { data, error, isLoading } = useSWR<SerieData[]>(`/series`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useGetSerieById(id: string): Response<SerieData> {
  const { data, error, isLoading } = useSWR<SerieData>(`/series/${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useGetAllSeasonBySerieId(serieId: string): Response<SeasonData[]> {
  const { data, error, isLoading } = useSWR<SeasonData[]>(`/series/${serieId}/season`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useGetSeasonById(id: string): Response<SeasonData> {
  const { data, error, isLoading } = useSWR<SeasonData>(`/season/${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useGetAllProgrammeBySeasonId(seasonId: string): Response<ProgrammeData[]> {
  const { data, error, isLoading } = useSWR<ProgrammeData[]>(`/season/${seasonId}/programme`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useGetProgrammeById(id: string): Response<ProgrammeData> {
  const { data, error, isLoading } = useSWR<ProgrammeData>(`/programme/${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
