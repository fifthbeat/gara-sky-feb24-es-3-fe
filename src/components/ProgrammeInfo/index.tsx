import Text from "@components/Atoms/Text";
import { formatSecondsToMinutes } from "@utils/formatSecondsToMinutes";
import "./styles.css";

type Props = {
  episodeNumber: string;
  durationSeconds: string;
};

const ProgrammeInfo = ({ durationSeconds, episodeNumber }: Props) => {
  return (
    <div className="programme-info">
      <Text as="span" variant="small-text" weight="medium">
        Episodi: {episodeNumber}
      </Text>
      <Text as="span" variant="small-text" weight="medium">
        Durata: {formatSecondsToMinutes(durationSeconds)}
      </Text>
    </div>
  );
};

export default ProgrammeInfo;
