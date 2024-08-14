const RackSkeleton = () => {
  return (
    <div
      className={`w-28 p-2 flex flex-col-reverse gap-1 h-full bg-gray-200 dark:bg-gray-400 animate-pulse`}
    >
      <div className={`w-full h-8 bg-gray-300 dark:bg-gray-500`} />
      <div className={`w-full h-8 bg-gray-300 dark:bg-gray-500`} />
      <div className={`w-full h-8 bg-gray-300 dark:bg-gray-500`} />
      <div className={`w-full h-8 bg-gray-300 dark:bg-gray-500`} />
    </div>
  );
};

export default RackSkeleton;
