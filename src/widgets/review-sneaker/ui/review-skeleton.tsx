import { Container } from "@/shared";

export const ReviewSkeleton = () => {
  return (
    <Container>
      <div
        className="flex justify-between gap-8 h-[240px] animate-pulse mt-8"
        role="status"
      >
        <div className="border rounded-lg border-indigo-300 p-4 text-indigo-900 flex flex-col justify-between h-full min-h-[240px] w-full">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-indigo-50"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              </svg>
            </div>
            <div className="text-xl font-bold" />
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <div className="h-7 w-[300px] bg-indigo-300 rounded-md" />
            </div>
            <div className="h-10 w-full bg-indigo-300 rounded-md " />
            <div className="h-10 w-full bg-indigo-300 rounded-md " />
          </div>
        </div>
      </div>
    </Container>
  );
};
