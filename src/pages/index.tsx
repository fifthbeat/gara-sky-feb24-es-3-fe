import Heading from "@components/Atoms/Heading";
import Header from "@components/Header";
import List from "@components/List";
import { useGetAllSeries } from "@services/api";
import { Outlet } from "react-router";

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
      <Header />

      <Heading as="h3" variant="section-title">
        In evidenza
      </Heading>

      <List entities={data} routePath="/serie" variant="card" />
    </div>
  );
}

export default Home;
