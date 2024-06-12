import { Button, Input, Textarea } from "@nextui-org/react";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PLayouts } from "../../../layout/PLayouts";
import { BiSearch } from "react-icons/bi";


const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  {
    id: 2,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

export const CreateCompanies = () => {
  
  return (
    <>
      <main className="lg:grid lg:grid-cols-2 lg:gap-3">
        <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <PLayouts message="Datos de la compañía" />
            <div className="shadow-md overflow-hidden rounded-xl mt-3">
              <div className="bg-white dark:bg-primaryDark   p-4">
                <div className="mt-3 grid grid-cols-4 gap-6">
                  <div className="col-span-full">
                    <Input
                      type="text"
                      label="Nombre"
                      variant="faded"
                      placeholder="Introduce el nombre de la compañía"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <Input
                      type="text"
                      label="RIF"
                      variant="faded"
                      placeholder="Introduce el RIF"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <Input type="text" label="Website" variant="faded" />
                  </div>

                  <div className="col-span-full">
                    <Textarea
                      label="Description"
                      placeholder="Enter your description"
                      className=""
                      variant="faded"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-primaryDark px-4 py-3 text-right sm:px-6 pb-7">
                <Button
                  color="primary"
                  endContent={<HiMiniPencilSquare className="h-5 w-5" />}
                >
                  Registrar
                </Button>
              </div>
            </div>
          </form>
        </section>

        <section
          aria-labelledby="billing-history-heading"
          className="lg:mt-0 mt-10"
        >
          <div className="flex justify-between items-center mb-5">
            <PLayouts message="Método de pago" />
            <div>
              <Button color="primary" isIconOnly size="md">
                <BiSearch className={`font-semibold h-6 w-6 `} />
              </Button>
            </div>
          </div>
          <div className="bg-white  shadow-md overflow-hidden rounded-xl ">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-t border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Amount
                          </th>
                          {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                          <th
                            scope="col"
                            className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                          >
                            <span className="sr-only">View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              <time dateTime={payment.datetime}>
                                {payment.date}
                              </time>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              {payment.description}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              {payment.amount}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                              <a
                                href={payment.href}
                                className="text-orange-600 hover:text-orange-900"
                              >
                                View receipt
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
