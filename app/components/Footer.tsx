import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()}{" "}
              <a href="./" className="hover:underline">
                Lone Inc™
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <ul className="flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-6 text-sm font-medium text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;