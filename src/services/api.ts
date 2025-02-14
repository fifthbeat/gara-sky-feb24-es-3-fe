import useSWR from "swr";
import { ProgrammeData, SeasonData, SerieData } from "./types";

const fetcher = (url: string) => fetch(`${import.meta.env.VITE_BASE_PATH}${url}`).then((res) => res.json());

type Response<TData> = {
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
};

type ApiResponse<TData> = {
  data: TData;
};

export function useGetAllSeries(): Response<SerieData[]> {
  const { data, error, isLoading } = useSWR<ApiResponse<SerieData[]>>(`/series`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export function useGetSerieById(id: string): Response<SerieData> {
  const { data, error, isLoading } = useSWR<ApiResponse<SerieData>>(`/series/${id}`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export function useGetAllSeasonBySerieId(serieId: string): Response<SeasonData[]> {
  const { data, error, isLoading } = useSWR<ApiResponse<SeasonData[]>>(`/series/${serieId}/seasons`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export function useGetSeasonById(id: string): Response<SeasonData> {
  const { data, error, isLoading } = useSWR<ApiResponse<SeasonData>>(`/seasons/${id}`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export function useGetAllProgrammeBySeasonId(seasonId: string): Response<ProgrammeData[]> {
  const { data, error, isLoading } = useSWR<ApiResponse<ProgrammeData[]>>(`/seasons/${seasonId}/programmes`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export function useGetProgrammeById(id: string): Response<ProgrammeData> {
  const { data, error, isLoading } = useSWR<ApiResponse<ProgrammeData>>(`/programmes/${id}`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}
