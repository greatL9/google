export default function Loading() {
  return (
    <div className="pb-40 sm:pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-8 animate-pulse">
            <div className="h-60 w-full bg-gray-200 rounded-md mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      <div className="sm:ml-15 mt-10">
        <div className="w-40 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
