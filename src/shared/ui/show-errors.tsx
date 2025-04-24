type Props = {
  error: string;
};
export const ShowErrors = ({ error }: Props) => {
  return (
    <div className="rounded-lg p-4 bg-indigo-800">
      <strong className=" font-bold text-xl inline-flex items-center justify-center">
        {error}
      </strong>
    </div>
  );
};
