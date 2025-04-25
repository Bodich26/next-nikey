import Link from "next/link";

export const FooterMenu = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-xl font-bold text-indigo-50 mb-6">{title}</h4>
      <ul className="max-sm:items-center flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} className="w-fit">
            <Link
              href="#"
              className=" text-base font-light leading-normal text-indigo-50 hover:text-indigo-300 transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
