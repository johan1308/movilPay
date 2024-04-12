import React, { useState } from "react";


export const SidebarLeftDesktop = ({children}:{children:React.ReactNode}) => {
  

  const [isExpand, setIsExpand] = useState(true);
  const handleOpened = (status: any) => {
    setIsExpand(status);
    
  };
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6 pb-4">
      <nav
        role="navigation"
        className={[
          "dark:bg-primaryDark bg-white/80  z-90 border-r h-full border-slate-100 shadow-xl rounded-xl absolute inset-y-0 right-0 ",
          "transition-all duration-300 ease-in-out ",
          `${isExpand ? "w-64" : "w-0"}`,
        ].join(" ")}
      >
        <button
          className="absolute z-90 top-16 -left-6 bg-white dark:bg-primaryDark  hover:bg-slate-100 text-primary p-0.5 rounded-full "
          onClick={() => {
            handleOpened(!isExpand);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              isExpand ? "rotate-0" : "rotate-180"
            } transform transition duration-500 h-7 w-7`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`overflow-hidden`}>
          <div className="mb-0 list-none text-slate-500">

            <div className="mt-2  p-2">
              {children}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

