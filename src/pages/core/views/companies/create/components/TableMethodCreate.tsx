import { Button } from "@nextui-org/react";
import { FaRegTrashAlt } from "react-icons/fa";

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

export const TableMethodCreate = () => {
  return (
    <table className="min-w-full  ">
      <thead className="bg-gray-50 dark:bg-primaryDark">
        <tr className="dark:text-titleDark text-gray-900">
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-semibold "
          >
            Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-semibold "
          >
            Description
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-semibold "
          >
            Amount
          </th>

          <th
            scope="col"
            className="relative px-6 py-3 text-left text-sm font-medium "
          >
            <span className="sr-only">View receipt</span>
          </th>
        </tr>
      </thead>
      <tbody className="  bg-white dark:bg-primaryDark">
        {payments.map((payment) => (
          <tr key={payment.id} className="text-gray-800 dark:text-textDark">
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium ">
              <time dateTime={payment.datetime}>{payment.date}</time>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm ">
              {payment.description}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm ">
              {payment.amount}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
              <Button isIconOnly color="danger" size="sm">
                <FaRegTrashAlt className="h-5 w-5" /> 
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
