import cn from "classnames";
import { BaseEntity } from "@services/types";
import { getSynopsisByType } from "@utils/getSynopsisByType";
import CardLink from "@components/CardLink";
import { getImageUrlByUsage } from "@utils/getImageUrlByUsage";
import ItemLink from "@components/ItemLink";
import Text from "@components/Atoms/Text";
import ListSkeleton from "./ListSkeleton";
import "./styles.css";

type Props = {
  entities: BaseEntity[] | undefined;
  routePath: string;
  variant: "card" | "item";
  title?: string;
  isLoading?: boolean | undefined;
};

const variantToComponent = {
  card: CardLink,
  item: ItemLink,
};

const List = ({ entities, routePath, variant, title, isLoading }: Props) => {
  const Component = variantToComponent[variant];

  if (isLoading || !entities) {
    return <ListSkeleton />;
  }

  return (
    <div className="list">
      {title && (
        <Text variant="body" weight="medium">
          {title}
        </Text>
      )}

      <div className={cn("list__wrapper", variant === "card" ? "card-list__wrapper" : "item-list__wrapper")}>
        {entities.map((entity) => {
          const imageUrl =
            variant === "card"
              ? getImageUrlByUsage(entity.images, "Cover")!
              : getImageUrlByUsage(entity.images, "Scene")!;

          return (
            <Component
              title={entity.title}
              href={`${routePath}/${entity.uuid}`}
              key={entity.uuid}
              imageUrl={imageUrl}
              subtitle={getSynopsisByType(entity.subtitle, "short")!}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
