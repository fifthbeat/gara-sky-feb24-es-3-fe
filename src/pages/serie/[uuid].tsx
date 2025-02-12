import EntityDetails from "@components/EntityDetails";
import List from "@components/List";
import { useGetAllSeasonBySerieId, useGetSerieById } from "@services/api";
import { useParams } from "react-router-dom";

function SerieDetailsPage() {
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
    <EntityDetails images={serie.images} title={serie.title} subtitle={serie.subtitle}>
      <List routePath="/season" entities={allSeason} variant="item" title="Stagioni" />
    </EntityDetails>
  );
}

export default SerieDetailsPage;
