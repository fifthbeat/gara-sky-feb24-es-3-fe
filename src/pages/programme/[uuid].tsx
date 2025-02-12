import { useParams } from "react-router-dom";

import { useGetProgrammeById } from "@services/api";
import { getImageUrlByUsage } from "@services/utils/getImageUrlByUsage";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";

function ProgrammeDetails() {
  const { uuid } = useParams();

  const { data, isError, isLoading } = useGetProgrammeById(uuid!);

  if (isError) {
    return <div>Failed to fetch serie</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>{data.title}</p>
        <p>{getSynopsisByType(data.subtitle, "long")}</p>
        <img src={getImageUrlByUsage(data.images, "Background")} alt={data.title} />
      </div>
    </>
  );
}

export default ProgrammeDetails;
