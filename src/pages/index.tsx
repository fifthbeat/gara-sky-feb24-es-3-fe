import List from "@components/List";
import { useGetAllSeries } from "@services/api";

function Home() {
  const { data, isError, isLoading } = useGetAllSeries();

  if (isError) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return <List entities={data} routePath="/serie" variant="card" title="In evidenza" />;
}

export default Home;
