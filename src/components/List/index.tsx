import cn from "classnames";
import { BaseEntity } from "@services/types";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";
import CardLink from "@components/CardLink";
import { getImageUrlByUsage } from "@services/utils/getImageUrlByUsage";
import ItemLink from "@components/ItemLink";
import Text from "@components/Atoms/Text";
import "./styles.css";

type Props = {
  entities: BaseEntity[];
  routePath: string;
  variant: "card" | "item";
  title?: string;
};

const variantToComponent = {
  card: CardLink,
  item: ItemLink,
};

const List = ({ entities, routePath, variant, title }: Props) => {
  const Component = variantToComponent[variant];
  return (
    <div className="list">
      {title && <Text variant="body">{title}</Text>}

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
