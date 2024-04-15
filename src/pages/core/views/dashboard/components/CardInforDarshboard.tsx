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
    <div className=" w-full bg-white rounded-lg shadow dark:bg-primaryDark shadow-xl p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt className="text-base font-semibold text-gray-500 dark:text-gray-400 pb-1">
            {title}
          </dt>
          <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">
            {data}
          </dd>
        </dl>
        <div>
          <span className=" text-gray-400 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md  dark:text-white">
            
            {Icon}
          </span>
        </div>
      </div>

    </div>
  );

  
};
