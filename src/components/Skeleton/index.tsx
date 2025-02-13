import cn from "classnames";
import "./styles.css";

type Props = {
  count?: number;
  variant: "title" | "text" | "small-text" | "card" | "item" | "button";
  width?: string;
};

export const BaseSkeleton = ({ count = 1, variant, width }: Props) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={cn("skeleton", { [`skeleton-${variant}`]: variant })} style={{ width }} />
      ))}
    </>
  );
};

const CardListSkeleton = () => {
  return (
    <div className="list">
      <BaseSkeleton variant="title" />
      <div className="list__wrapper card-list__wrapper">
        <BaseSkeleton count={2} variant="card" />
      </div>
    </div>
  );
};

export { CardListSkeleton };
