import { useFetchData } from "../services/api";
import { Link } from "react-router-dom";
import { SerieData } from "../services/types";
import Text from "../components/Atoms/Text";
import { getSynopsisByType } from "../services/utils/getSynopsisByType";

function Home() {
  const { data, error, isLoading } = useFetchData<SerieData>("/api/mock-serie");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text>Serie in evidenza</Text>
      <Link to={`/serie/${data.uuid}`}>
        <div style={{ background: "#f3f3f3" }}>
          <p>{data.localizableInformation[0].title}</p>
          <p>{getSynopsisByType(data.localizableInformation[0].synopsis, "short")}</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
