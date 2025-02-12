import Heading from "@components/Atoms/Heading";
import Text from "@components/Atoms/Text";
import { BaseEntity } from "@services/types";
import { getImageUrlByUsage } from "@services/utils/getImageUrlByUsage";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";
import cn from "classnames";
import "./styles.css";

type Props = {
  title: string;
  subtitle: BaseEntity["subtitle"];
  images: BaseEntity["images"];
  children?: React.ReactNode;
  infoArea?: React.ReactNode;
  buttonArea?: React.ReactNode;
};

const EntityDetails = ({ title, subtitle, images, children, infoArea, buttonArea }: Props) => {
  return (
    <>
      <div className="details__image-container">
        <img src={getImageUrlByUsage(images, "Background")} alt={title} />
      </div>

      <div className="details__container">
        {infoArea}

        <div className={cn("flex-column", "details__content")}>
          <div>
            <Heading as="h3" variant="page-title">
              {title}
            </Heading>
            <Text variant="body">{getSynopsisByType(subtitle, "long")}</Text>
          </div>

          {children}
        </div>

        {buttonArea}
      </div>
    </>
  );
};

export default EntityDetails;
