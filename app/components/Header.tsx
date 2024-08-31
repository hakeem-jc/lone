import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="flex flex-wrap items-center justify-between  p-4">
        <a
          href="./"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            <span className="text-white">Lone</span>
          </span>
        </a>

        <ul className="flex gap-4 justify-cente items-center text-white">
          <li>About</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Contacts</li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
