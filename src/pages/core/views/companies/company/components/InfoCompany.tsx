const attachments = [
  { name: "resume_front_end_developer.pdf", href: "#" },
  { name: "coverletter_front_end_developer.pdf", href: "#" },
];
export const InfoCompany = () => {
  return (
    <section aria-labelledby="applicant-information-title" >
      <div className="">
        <div className="pb-3">
          <h2
            id="applicant-information-title"
            className="text-lg font-medium leading-6 text-gray-900 dark:text-titleDark"
          >
            Información de la compañía
          </h2>
        </div>
        <div className="px-4 py-5 sm:px-6 bg-white dark:bg-primaryDark shadow rounded-lg shadow-md">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-base font-medium text-gray-500 dark:text-titleDark">
                Nombre
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-textDark">
                Backend Developer
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-base font-medium text-gray-500 dark:text-titleDark">
                RIF
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-textDark">
                ricardocooper@example.com
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-base font-medium text-gray-500 dark:text-titleDark">
                Website
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-textDark">
                $120,000
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-base font-medium text-gray-500 dark:text-titleDark">
                Descripción
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-textDark">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
