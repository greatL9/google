export default function Loading() {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-4">
      <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-5 animate-pulse"></div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="mb-8 animate-pulse max-w-xl">
          <div className="flex flex-col gap-2">
            {/* Favicon + display link */}
            <div className="flex items-center gap-2 mb-1">
              <div className="h-7 w-7 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex flex-col gap-1">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="space-y-1 mt-1">
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-3 w-4/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
