import { Img } from "react-image";
import { navigation } from "../data/menu";
import { NavLink } from "react-router-dom";
import { useThemeMovilPay } from "../../../hooks/useTheme";

export const SidebarMobile = () => {
  const { darkMode } = useThemeMovilPay();
  return (
    <div
      className={`flex grow flex-col gap-y-5 overflow-y-auto ${
        darkMode ? "bg-primaryDark" : "bg-secondary"
      } border-r-3 border-primary px-6 pb-4 ring-1 ring-white/10`}
    >
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
