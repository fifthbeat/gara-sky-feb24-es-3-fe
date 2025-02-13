import { BaseSkeleton } from "@components/Skeleton";
import cn from "classnames";

type Props = {
  withButton?: boolean;
  withInfoArea?: boolean;
};

const EntityDetailsSkeleton = ({ withInfoArea, withButton }: Props) => {
  return (
    <div className={cn("layout__container", "details__container")}>
      {withInfoArea && <BaseSkeleton variant="small-text" width="20%" />}

      <BaseSkeleton variant="title" width="55%" />

      <div className={cn("flex-column", "details__content")}>
        <div>
          <BaseSkeleton variant="text" width="90%" />
          <BaseSkeleton variant="text" width="70%" />
          <BaseSkeleton variant="text" width="80%" />
        </div>

        {withButton && <BaseSkeleton variant="button" />}
      </div>
    </div>
  );
};

export default EntityDetailsSkeleton;
