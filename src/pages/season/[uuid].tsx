import { useParams } from "react-router-dom";

import List from "@components/List";
import { useGetAllProgrammeBySeasonId, useGetSeasonById } from "@services/api";
import { getImageUrlByUsage } from "@services/utils/getImageUrlByUsage";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";

function SeasonDetails() {
  const { uuid } = useParams();

  const { data: season, isError: isErrorSeason, isLoading: isLoadingSeason } = useGetSeasonById(uuid!);
  const {
    data: allSeason,
    isError: isErrorAllSeason,
    isLoading: isLoadingAllSeason,
  } = useGetAllProgrammeBySeasonId(uuid!);

  if (isErrorSeason || isErrorAllSeason) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoadingSeason || isLoadingAllSeason || !season || !allSeason) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>{season.title}</p>
        <p>{getSynopsisByType(season.subtitle, "long")}</p>
        <img src={getImageUrlByUsage(season.images, "Background")} alt={season.title} />
      </div>

      <List routePath="/programme" entities={allSeason} variant="item" />
    </>
  );
}

export default SeasonDetails;
