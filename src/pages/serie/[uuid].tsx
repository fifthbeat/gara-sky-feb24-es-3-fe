import { useParams } from "react-router-dom";

import List from "@components/List";
import { useGetAllSeasonBySerieId, useGetSerieById } from "@services/api";
import { getImageUrlByUsage } from "@services/utils/getImageUrlByUsage";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";

function SerieDetails() {
  const { uuid } = useParams();

  const { data: serie, isError: isErrorSerie, isLoading: isLoadingSerie } = useGetSerieById(uuid!);
  const { data: allSeason, isError: isErrorAllSeason, isLoading: isLoadingAllSeason } = useGetAllSeasonBySerieId(uuid!);

  if (isErrorSerie || isErrorAllSeason) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoadingSerie || isLoadingAllSeason || !serie || !allSeason) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>{serie.title}</p>
        <p>{getSynopsisByType(serie.subtitle, "long")}</p>
        <img src={getImageUrlByUsage(serie.images, "Background")} alt={serie.title} />
      </div>

      <List routePath="/season" entities={allSeason} variant="item" />
    </>
  );
}

export default SerieDetails;
