import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 md:justify-between">
        {/* logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse order-1 md:order-none">
          <img 
            src="/logo/Logo-64.svg" 
            className="h-8" 
            alt="Company Logo" 
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
            Cajun Airlines
          </span>
        </div>

        {/* navigation links */}
        <div className="order-3 w-full md:w-auto md:order-2 mt-4 md:mt-0">
          <ul className="flex justify-center space-x-4 md:space-x-8 font-medium">
            <Link 
              to="/"
              className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              title="Home"
            >
              Home
            </Link>
          
            <Link 
              to="/"
              className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              title="Home"
            >
              About
            </Link>
         
            <Link 
              to="/"
              className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              title="Home"
            >
              Services
            </Link>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}