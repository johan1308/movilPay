import { FcCurrencyExchange } from "react-icons/fc";

export const CardDolar = () => {
  return (
    <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-40 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-green-400 hover:dark:bg-green-400">
      <h3 className="text-xl text-center">Today</h3>
      <div className="gap-4 relative">
        <FcCurrencyExchange className="w-20 h-10 scale-[110%]"/>
        <p className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-2xl text-center group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:scale-100">
          200$
        </p>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
        <p className="text-md">Fecha</p>
        <p className="text-sm">21/05/2024</p>
      </div>
    </div>
  );
};
