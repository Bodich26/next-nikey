type Props = {
  error: string;
  type: "full" | "border";
};
export const ShowErrors = ({ error, type }: Props) => {
  if (type === "full") {
    return (
      <div className="rounded-lg p-4 bg-indigo-800">
        <strong className=" font-bold text-xl inline-flex items-center justify-center">
          {error}
        </strong>
      </div>
    );
  }

  if (type === "border") {
    return (
      <div className="rounded-lg p-4 bg-transparent border-1 border-indigo-300 mt-8">
        <strong className=" font-bold text-xl text-indigo-700 inline-flex items-center justify-center">
          {error}
        </strong>
      </div>
    );
  }
};
