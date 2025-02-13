import EntityDetails from "@components/EntityDetails";
import EntityDetailsSkeleton from "@components/EntityDetails/EntityDetailsSkeleton";
import ErrorFallback from "@components/ErrorFallback";
import List from "@components/List";
import { useGetAllSeasonBySerieId, useGetSerieById } from "@services/api";
import { useParams } from "react-router-dom";

function SerieDetailsPage() {
  const { uuid } = useParams();

  const { data: serie, isError: isErrorSerie, isLoading: isLoadingSerie } = useGetSerieById(uuid!);
  const { data: allSeason, isError: isErrorAllSeason, isLoading: isLoadingAllSeason } = useGetAllSeasonBySerieId(uuid!);

  if (isErrorSerie || isErrorAllSeason) {
    return <ErrorFallback subtitle="Non è stato possibile recuperare le informazioni della serie" />;
  }

  return (
    <>
      {isLoadingSerie || !serie ? (
        <EntityDetailsSkeleton />
      ) : (
        <EntityDetails images={serie.images} title={serie.title} subtitle={serie.subtitle} />
      )}

      <div className="layout__container">
        <List routePath="/season" entities={allSeason} variant="item" title="Stagioni" isLoading={isLoadingAllSeason} />
      </div>
    </>
  );
}

export default SerieDetailsPage;
