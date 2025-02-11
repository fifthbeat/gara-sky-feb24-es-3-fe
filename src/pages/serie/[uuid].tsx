import { useParams } from "react-router-dom";
import { useFetchData } from "../../services/api";
import { SerieData } from "../../services/types";
import { getSynopsisByType } from "../../services/utils/getSynopsisByType";
import { getImageUrlByUsage } from "../../services/utils/getImageUrlByUsage";

function SerieDetails() {
  const { uuid } = useParams();

  const { data, error, isLoading } = useFetchData<SerieData>(`/api/mock-serie/${uuid}`);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{data.localizableInformation[0].title}</p>
      <p>{getSynopsisByType(data.localizableInformation[0].synopsis, "long")}</p>
      <img src={getImageUrlByUsage(data.images, "Background")} alt={data.localizableInformation[0].title} />
    </div>
  );
}

export default SerieDetails;
