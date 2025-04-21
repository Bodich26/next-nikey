type Props = {
  className?: string;
  children: React.ReactNode;
};
export const Container = ({ children }: Props) => {
  return <div className="max-w-[1360px] px-[15px] mx-auto">{children}</div>;
};
