import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { Loading } from "../../../../../../components/Loading";

export const InfoCompany = () => {
  const { companies, isLoading } = useSelector((d: RootState) => d.companyID);
  return (
    <>
    <section aria-labelledby="applicant-information-title">
      <div className="">
        <div className="pb-3">
          <h2
            id="applicant-information-title"
            className="text-lg font-medium leading-6 text-gray-900 dark:text-titleDark"
          >
            Información de la compañía
          </h2>
        </div>
        {false ? (
          <Loading />
        ) : (
          <div className="px-6 py-6 sm:px-6 bg-white dark:bg-primaryDark shadow rounded-lg shadow-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <dt className="text-base font-medium text-lg text-gray-500 dark:text-titleDark">
                  Nombre
                </dt>
                <dd className="mt-2 text-sm text-gray-900 text-xl dark:text-textDark font-light">
                  {companies?.name}
                  luis
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg text-base font-medium text-gray-500 dark:text-titleDark ">
                  RIF
                </dt>
                <dd className="text-xl mt-2 text-sm text-gray-900 dark:text-textDark font-light">
                  {companies?.rif}
                  6214156
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg text-base font-medium text-gray-500 dark:text-titleDark">
                  Website
                </dt>
                <dd className="text-xl mt-2 text-sm text-gray-900 dark:text-textDark font-light">
                  $120,000
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg text-base font-medium text-gray-500 dark:text-titleDark">
                  Status
                </dt>
                <dd className="text-xl mt-2 text-sm text-gray-900 dark:text-textDark font-light">
                  {companies?.status_name}
                  activo
                </dd>
              </div>

              <div className="col-span-full">
                <dt className="text-lg text-base font-medium text-gray-500 dark:text-titleDark">
                  Descripción
                </dt>
                <dd className="text-xl mt-2  text-gray-900 dark:text-textDark font-light">
                  {companies?.description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat magni, eum, reiciendis reprehenderit id repellat ipsum aperiam dolor ea commodi tempora architecto, nulla neque quae iste expedita ipsam consequuntur.
                  Ipsa cumque sed consequuntur est fuga aliquam voluptas sint. Cum, unde! Molestias, minima? Voluptatem, atque ipsa eveniet molestias, aliquam possimus doloremque mollitia consequatur ducimus alias repellendus in, hic cumque veritatis!
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>

    </section>
    
    </>
    
    
  );
};
