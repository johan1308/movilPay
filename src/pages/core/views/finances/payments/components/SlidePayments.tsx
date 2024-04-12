import { Dialog, Transition } from "@headlessui/react";
import { HiX } from "react-icons/hi";
import React, { Fragment } from "react";
import { useThemeMovilPay } from "../../../../../../hooks/useTheme";
import { classNames } from "../../../../../../helpers/ClassN";
interface Props {
  open: boolean;
  setOpen: (status: boolean) => void;
  children: JSX.Element | React.ReactNode;
}

export const SlidePayments = ({ open, setOpen,children }: Props) => {
    const {darkMode}=useThemeMovilPay()
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-400"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-400 sm:duration-400"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-400 sm:duration-400"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[650px]">
                  <div className={classNames(darkMode?'bg-primaryDark':'bg-white',"flex h-full flex-col overflow-y-scroll py-6 shadow-xl ")}>
                    <div className="px-4 sm:px-6 py-2">
                      <div className="flex items-start justify-between ">
                        <Dialog.Title className="dark:text-white text-base font-semibold leading-6 text-gray-900 ">
                          Registrar pago
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <HiX className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
