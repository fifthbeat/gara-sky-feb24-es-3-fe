import { BaseSkeleton } from "@components/Skeleton";

const ListSkeleton = () => {
  return (
    <div className="list__skeleton">
      <BaseSkeleton variant="text" width="40%" />

      <div className="list__wrapper__skeleton">
        <BaseSkeleton count={3} variant="item" />
      </div>
    </div>
  );
};

export default ListSkeleton;
