import List from "@components/List";
import { TabItem, TabList } from "@components/TabList";
import { useGetAllSeries } from "@services/api";
import { IconBallBasketball, IconDeviceTv, IconMovie, IconSearch } from "@tabler/icons-react";

const tabs: TabItem[] = [
  { key: "search", title: "Cerca", icon: <IconSearch />, isDisabled: true },
  { key: "sports", title: "Sport", icon: <IconBallBasketball /> },
  { key: "tv", title: "Serie", icon: <IconDeviceTv />, isDisabled: true },
  { key: "movies", title: "Film", icon: <IconMovie />, isDisabled: true },
];

function Home() {
  const { data, isError, isLoading } = useGetAllSeries();

  if (isError) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TabList items={tabs} selectedKey="sports" />
      <List entities={data} routePath="/serie" variant="card" title="In evidenza" />
    </>
  );
}

export default Home;
