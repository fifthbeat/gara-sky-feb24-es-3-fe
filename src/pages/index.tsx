import Heading from "@components/Atoms/Heading";
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

  return (
    <div>
      <Heading as="h3" variant="section-title">
        Serie in evidenza
      </Heading>

      <List entities={data} routePath="/serie" variant="card" />
    </div>
  );
}

export default Home;
