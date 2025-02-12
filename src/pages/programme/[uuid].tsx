import { useParams } from "react-router-dom";
import EntityDetails from "@components/EntityDetails";
import { useGetProgrammeById } from "@services/api";
import ProgrammeInfo from "@components/ProgrammeInfo";

function ProgrammeDetailsPage() {
  const { uuid } = useParams();

  const { data, isError, isLoading } = useGetProgrammeById(uuid!);

  if (isError) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <EntityDetails
      images={data.images}
      title={data.title}
      subtitle={data.subtitle}
      infoArea={<ProgrammeInfo episodeNumber={data.episodeNumber} durationSeconds={data.durationSeconds} />}
    ></EntityDetails>
  );
}

export default ProgrammeDetailsPage;
