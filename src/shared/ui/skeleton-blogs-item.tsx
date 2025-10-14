export const SkeletonBlogsItem = () => {
  return (
    <div
      role="status"
      className="relative rounded-lg border border-indigo-50 shadow-sm animate-pulse h-[330px] flex flex-col"
    >
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg bg-indigo-300 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-indigo-50"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        </svg>
      </div>

      <div className="p-3 flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="h-7 w-[300px] bg-indigo-300 rounded-md" />
        </div>
        <div className="h-7 w-[200px] bg-indigo-300 rounded-md mt-4" />
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 w-15 bg-indigo-300 rounded-full" />
          <div className="h-4 w-10 bg-indigo-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
