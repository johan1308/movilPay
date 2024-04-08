import { configTaiwind } from "../../../../../../utils/configTaiwind";
import { FilterStepOne } from "./components/FilterStepOne";
import { CardServiceStepOne } from "./components/CardServiceStepOne";


const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

export const StepOneCreate = () => {
  return (
    <div className={configTaiwind.animateView}>
      <main>
        <div className="p-4  lg:text-center sm:px-6 lg:px-8  bg-white rounded-xl shadow-xl dark:bg-primaryDark">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Servicios
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Selecciona un servicio para continuar
          </p>
        </div>
        {/* Filters */}
        <FilterStepOne />
        {/* Product grid */}
        <section
          aria-labelledby="products-heading"
          className="overflow-hidden "
        >
          <div className="grid grid-cols-1   space-y-5 lg:space-y-0 md:space-y-0 space-x-5  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <CardServiceStepOne product={product} key={product.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
