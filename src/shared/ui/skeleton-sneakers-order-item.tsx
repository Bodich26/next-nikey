export const SkeletonSneakersOrderItem = () => {
  return (
    <div
      role="status"
      className="w-full relative rounded-lg border border-indigo-100 p-4 flex gap-4 max-lg:flex-col animate-pulse"
    >
      <div className="absolute top-2 right-2 h-6 w-6 bg-indigo-100 rounded-full" />

      <div className="relative w-full min-w-[20%] h-[150px] bg-indigo-300 rounded-md overflow-hidden flex items-center justify-center">
        <svg
          className="w-10 h-10 text-indigo-100"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        </svg>
      </div>

      <div className="flex flex-col flex-wrap gap-2 w-full text-sm sm:text-base">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="h-4 w-24 bg-indigo-100 rounded-full" />
            <div className="h-4 w-32 bg-indigo-100 rounded-full" />
          </div>
        ))}

        <div className="flex justify-between items-center mt-2">
          <div className="h-4 w-24 bg-indigo-100 rounded-full" />
          <div className="h-6 w-24 bg-indigo-100 rounded-full" />
        </div>
      </div>
    </div>
  );
};
