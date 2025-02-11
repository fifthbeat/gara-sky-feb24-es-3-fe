import useSWR, { SWRResponse } from "swr";
import { mockData, mockProgramme, mockSeason, mockSerie } from "./mock";

const fetcher = async <TData>(url: string): Promise<TData> => {
  // remove this
  if (url === "/api/mock-data") {
    return new Promise((resolve) => resolve(mockData));
  }
  if (url === "/api/mock-serie") {
    return new Promise((resolve) => resolve(mockSerie));
  }
  if (url === "/api/mock-serie/8980dd13-ee24-42b3-b4b8-0b9fc59ab821") {
    return new Promise((resolve) => resolve(mockSerie));
  }
  if (url === "/api/mock-season") {
    return new Promise((resolve) => resolve(mockSeason));
  }
  if (url === "/api/mock-programme") {
    return new Promise((resolve) => resolve(mockProgramme));
  }
  throw new Error("URL non valido");

  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};

export const useFetchData = <TData>(url: string): SWRResponse<TData, Error> => {
  return useSWR<TData, Error>(url, fetcher);
};
