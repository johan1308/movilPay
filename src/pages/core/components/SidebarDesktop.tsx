import { Accordion, AccordionItem } from "@nextui-org/react";
import { navigation } from "../data/menu";
import { Img } from "react-image";
import { NavLink } from "react-router-dom";

export const SidebarDesktop = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-1 mt-[4.1rem] lg:flex lg:w-72 lg:flex-col ">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto dark:bg-primaryDark border-r-3 dark:border-r-transparent bg-white/80 px-6 pb-4">
        <nav className="flex flex-1 flex-col mt-5">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  item.show && (
                    <li key={item.name}>
                      {!item.children ? (
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
                      ) : (
                        <ComponentChildren item={item} />
                      )}
                    </li>
                  )
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

const ComponentChildren = ({ item }: any) => {
  return (
    <>
      <Accordion
        selectionMode="multiple"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
        itemClasses={{
          content: "m-0 px-2",
        }}
        isCompact
      >
        <AccordionItem
          key={item.path}
          aria-label="Accordion 1"
          startContent={
            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          }
          title={
            <p className="text-secondary  dark:text-white group flex gap-x-3 rounded-md  text-base leading-6 font-semibold">
              {item.name}
            </p>
          }
        >
          <div className="ml-1">
            {item.children.map((resp: any) => (
              <NavLink
                to={resp.path}
                key={resp.path}
                className={({ isActive }) => {
                  const res = isActive
                    ? "bg-secondary text-white shadow-lg"
                    : "text-secondary hover:text-white hover:bg-secondary dark:text-white";
                  return `${res} group flex gap-x-1 rounded-md p-2 text-base leading-6 font-semibold`;
                }}
              >
                <resp.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                {resp.name}
              </NavLink>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};
