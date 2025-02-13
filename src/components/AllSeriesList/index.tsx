import ErrorFallback from "@components/ErrorFallback";
import List from "@components/List";
import { CardListSkeleton } from "@components/Skeleton";
import { useGetAllSeries } from "@services/api";

const AllSeriesList = () => {
  const { data, isError, isLoading } = useGetAllSeries();

  if (isError) {
    return <ErrorFallback subtitle="Non è stato possibile recuperare la lista delle serie" />;
  }

  if (isLoading || !data) {
    return <CardListSkeleton />;
  }

  return <List entities={data} routePath="/serie" variant="card" title="In evidenza" />;
};

export default AllSeriesList;
