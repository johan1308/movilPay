import { Img } from "react-image";
import { classNames } from "../../../helpers/ClassN";
import { navigation, teams } from "../data/menu";
import { NavLink } from "react-router-dom";

export const SidebarMobile = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary border-r-3 border-primary px-6 pb-4 ring-1 ring-white/10">
      <div className="flex h-16 shrink-0 items-center justify-center mt-10 mb-6">
        <Img
          src={require("../../../assets/img/logotipo_letras_blancas_movil_play_23x14cm.png")}
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
                        ? "bg-primary text-white"
                        : "text-white hover:text-white hover:bg-primary";
                      return `${res} group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`;
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
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.path}
                    className={classNames(
                      team.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
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
  );
};
