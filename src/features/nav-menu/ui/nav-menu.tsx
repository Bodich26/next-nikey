import Link from "next/link";

export const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-8 text-lg font-normal leading-none">
        <li>
          <Link
            className="hover:text-indigo-300 transition-colors duration-300"
            href="/catalog"
          >
            New
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-indigo-300 transition-colors duration-300"
            href="/catalog"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-indigo-300 transition-colors duration-300"
            href="/catalog"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-indigo-300 transition-colors duration-300"
            href="/catalog"
          >
            Kids
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-indigo-300 transition-colors duration-300"
            href="/catalog"
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
