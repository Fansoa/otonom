import CrateSkeleton from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/components/Crate/CrateSkeleton.tsx";

const RackSkeleton = () => {
  return (
    <div
      className={`w-28 p-2 flex flex-col-reverse gap-1 h-full bg-gray-200 dark:bg-gray-400 animate-pulse`}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <CrateSkeleton key={`CrateSkeleton-${i}`} />
      ))}
    </div>
  );
};

export default RackSkeleton;
