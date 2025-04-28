type Props = {
  notify: string;
};
export const ShowNotify = ({ notify }: Props) => {
  return (
    <strong className="text-center font-medium text-lg text-indigo-500 absolute top-[40%] right-[50%] translate-x-[50%]">
      {notify}
    </strong>
  );
};
