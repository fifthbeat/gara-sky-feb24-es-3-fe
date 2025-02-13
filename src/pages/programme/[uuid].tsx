import { useParams } from "react-router-dom";
import EntityDetails from "@components/EntityDetails";
import { useGetProgrammeById } from "@services/api";
import ProgrammeInfo from "@components/ProgrammeInfo";
import Button from "@components/Button";
import { IconDownload, IconPlayerPlayFilled } from "@tabler/icons-react";
import EntityDetailsSkeleton from "@components/EntityDetails/EntityDetailsSkeleton";

function ProgrammeDetailsPage() {
  const { uuid } = useParams();

  const { data, isError, isLoading } = useGetProgrammeById(uuid!);

  if (isError) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoading || !data) {
    return <EntityDetailsSkeleton withButton withInfoArea />;
  }

  return (
    <EntityDetails
      images={data.images}
      title={data.title}
      subtitle={data.subtitle}
      infoArea={<ProgrammeInfo episodeNumber={data.episodeNumber} durationSeconds={data.durationSeconds} />}
      buttonArea={
        <div className="button-area">
          <Button label="Inizia a guardare" onClick={() => {}} icon={<IconPlayerPlayFilled size={16} />} />
          <Button label="Download" onClick={() => {}} icon={<IconDownload size={16} />} variant="secondary" />
        </div>
      }
    />
  );
}

export default ProgrammeDetailsPage;
