import AllSeriesList from "@components/AllSeriesList";
import { TabItem, TabList } from "@components/TabList";
import { IconBallBasketball, IconDeviceTv, IconMovie, IconSearch } from "@tabler/icons-react";

const tabs: TabItem[] = [
  { key: "search", title: "Cerca", icon: <IconSearch />, isDisabled: true },
  { key: "sports", title: "Sport", icon: <IconBallBasketball /> },
  { key: "tv", title: "Serie", icon: <IconDeviceTv />, isDisabled: true },
  { key: "movies", title: "Film", icon: <IconMovie />, isDisabled: true },
];

function Home() {
  return (
    <>
      <TabList items={tabs} selectedKey="sports" />
      <AllSeriesList />
    </>
  );
}

export default Home;
