import { FaBuildingUser } from "react-icons/fa6";

export const HeaderCompany = () => {
  return (
    <div className=" mb-7 max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
      <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
          <div className="relative p-3 bg-white dark:bg-primaryDark rounded-full shadow-md">
            <FaBuildingUser className="h-16 w-16 rounded-full text-gray-900 dark:text-white" />
            <span
              className="absolute inset-0 rounded-full shadow-inner  "
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-titleDark">
            Ricardo Cooper
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Applied for{" "}
            <a href="#" className="text-gray-900">
              Front End Developer
            </a>{" "}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
    </div>
  );
};
