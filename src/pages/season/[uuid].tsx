import { useParams } from "react-router-dom";

import List from "@components/List";
import { useGetAllProgrammeBySeasonId, useGetSeasonById } from "@services/api";
import EntityDetails from "@components/EntityDetails";

function SeasonDetailsPage() {
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
    <EntityDetails images={season.images} title={season.title} subtitle={season.subtitle}>
      <List routePath="/programme" entities={allSeason} variant="item" title="Prossimi programmi" />
    </EntityDetails>
  );
}

export default SeasonDetailsPage;
