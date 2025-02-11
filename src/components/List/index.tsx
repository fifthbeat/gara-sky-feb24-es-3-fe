import { BaseEntity } from "@services/types";
import { getSynopsisByType } from "@services/utils/getSynopsisByType";
import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
  entities: BaseEntity[];
  routePath: string;
};

const List = ({ entities, routePath }: Props) => {
  return (
    <div className="list__wrapper">
      {entities.map((entity) => (
        <Link to={`${routePath}/${entity.uuid}`} key={entity.uuid}>
          <div style={{ background: "#f3f3f3" }}>
            <p>{entity.title}</p>
            <p>{getSynopsisByType(entity.subtitle, "short")}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
