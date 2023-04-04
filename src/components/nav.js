import React from 'react';
import Toggle from './toggle';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {

  
  return (
    <header className="text-gray-700 bg-transparent body-font ">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="w-full md:block md:w-auto">
          <CustomLink
            to="javascript.void(0)"
            className="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            {/* <img src={logo} alt="tailwind" className="w-9 h-9" /> */}
          </CustomLink>
          <nav className="flex flex-wrap items-center justify-center ml-4 text-base">
            <CustomLink
              to="/"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              About
            </CustomLink>
            <CustomLink
              to="/work"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Projects
            </CustomLink>
            <CustomLink
              to="/contact"
              className="mr-5 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"
            >
              Contact
            </CustomLink>
          </nav>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (

    <Link to={to} {...props} className={isActive ? "mr-5 p-4 text-sm font-semibold text-gray-700 dark:text-white border-b-4 border-gray-600 dark:border-white hover:text-gray-700" : "mr-5 p-3 text-sm font-semibold text-gray-700 dark:text-white rounded-xl hover:text-gray-800"}>
      {children}
    </Link>


  )
}
