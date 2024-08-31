import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-gray-800 w-full border-b border-gray-600">
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
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg 0 focus:ring-4  text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
