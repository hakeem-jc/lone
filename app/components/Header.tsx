import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        <a
          href="./"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            <span className="text-white">Lone</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
