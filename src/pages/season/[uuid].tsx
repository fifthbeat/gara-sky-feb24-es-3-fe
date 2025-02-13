import { useParams } from "react-router-dom";

import List from "@components/List";
import { useGetAllProgrammeBySeasonId, useGetSeasonById } from "@services/api";
import EntityDetails from "@components/EntityDetails";
import EntityDetailsSkeleton from "@components/EntityDetails/EntityDetailsSkeleton";
import ErrorFallback from "@components/ErrorFallback";

function SeasonDetailsPage() {
  const { uuid } = useParams();

  const { data: season, isError: isErrorSeason, isLoading: isLoadingSeason } = useGetSeasonById(uuid!);
  const {
    data: allSeason,
    isError: isErrorAllSeason,
    isLoading: isLoadingAllSeason,
  } = useGetAllProgrammeBySeasonId(uuid!);

  if (isErrorSeason || isErrorAllSeason) {
    return <ErrorFallback subtitle="Non è stato possibile recuperare le informazioni della stagione" />;
  }

  return (
    <>
      {isLoadingSeason || !season ? (
        <EntityDetailsSkeleton />
      ) : (
        <EntityDetails images={season.images} title={season.title} subtitle={season.subtitle} />
      )}

      <div className="layout__container">
        <List
          routePath="/programme"
          entities={allSeason}
          variant="item"
          title="Prossimi programmi"
          isLoading={isLoadingAllSeason}
        />
      </div>
    </>
  );
}

export default SeasonDetailsPage;
