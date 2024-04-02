import { navigation } from "../data/menu";
import { Img } from "react-image";
import { NavLink } from "react-router-dom";

export const SidebarDesktop = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center justify-center pt-7 mt-7 mb-10">
          <Img
            src={require("../../../assets/img/logotipo_movil play_23x14cm.png")}
            className="h-26 w-48"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => {
                        const res = isActive
                          ? "bg-secondary text-white shadow-lg"
                          : "text-secondary hover:text-white hover:bg-secondary dark:text-white";
                        return `${res} group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold`;
                      }}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <HiMiniBanknotes
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
              Settings
            </a>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
