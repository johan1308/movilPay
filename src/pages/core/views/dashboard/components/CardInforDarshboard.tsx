import { classNames } from "../../../../../helpers/ClassN";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";

interface Props {
  Icon?: React.ReactNode | JSX.Element;
  color?: string;
  data?: string;
  title?: string;
}

export const CardInforDarshboard = ({ Icon, color, data, title }: Props) => {
  const { darkMode } = useThemeMovilPay();
  return (
    <div
      className={classNames(
        darkMode ? "bg-primaryDark" : "bg-white",
        "relative py-4 px-6 rounded-xl w-full  shadow-lg "
      )}
    >
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-secondary left-4 -top-5">
        {Icon}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{title}</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeWidth="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>Marketing Team</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>1 Weeks Left</p>
        </div>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Team Member</p>
            <div className="flex space-x-2"></div>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Progress</p>
            <div className="text-base text-gray-400 font-semibold">
              <p>34%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
