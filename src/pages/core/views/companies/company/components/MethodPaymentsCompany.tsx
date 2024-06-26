import { classNames } from "../../../../../../helpers/ClassN";

import { ButtonModalMethodComponents } from "../../../../components/methodPayments";
import { FaMobileAlt } from "react-icons/fa";
import { TbTransfer } from "react-icons/tb";

const eventTypes = {
  applied: { icon: FaMobileAlt, bgColorClass: "bg-primary" },
  advanced: { icon: TbTransfer, bgColorClass: "bg-primary" },
};

const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: "Pago Movil",
    target: "Front End Developer",
    date: "Sep 20",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: "Advanced to phone screening by",
    target: "Transferencia",
    date: "Sep 22",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.applied,
    content: "Completed phone screening with",
    target: "Pago Movil",
    date: "Sep 28",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: "Transferencia",
    target: "Bethany Blake",
    date: "Sep 30",
    datetime: "2020-09-30",
  },
];

export const MethodPaymentsCompany = () => {
  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-span-1 lg:col-start-3 "
    >
      <div className="bg-white px-4 py-5 shadow-md dark:bg-primaryDark rounded-lg sm:px-6 ">
        <div className="flex items-center justify-between">
          <h2
            id="timeline-title"
            className="text-lg dark:text-white font-medium text-gray-900 "
          >
            Método de pagos
          </h2>
          <ButtonModalMethodComponents />
        </div>

        {/* Activity Feed */}
        <div className="mt-6 flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((item, itemIdx) => (
              <li key={item.id}>
                <div className="relative pb-8">
                  {itemIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          item.type.bgColorClass,
                          "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                        )}
                      >
                        <item.type.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {item.content}{" "}
                          <a href="#" className="font-medium text-gray-900">
                            {item.target}
                          </a>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={item.datetime}>{item.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
