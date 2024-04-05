import { Disclosure } from "@headlessui/react";
import { configTaiwind } from "../../../../../../utils/configTaiwind";
import { FilterStepOne } from "./components/FilterStepOne";
import { CardServiceStepOne } from "./components/CardServiceStepOne";

const filters = {
  price: [
    { value: "0", label: "$0 - $25", checked: false },
    { value: "25", label: "$25 - $50", checked: false },
    { value: "50", label: "$50 - $75", checked: false },
    { value: "75", label: "$75+", checked: false },
  ],
  color: [
    { value: "white", label: "White", checked: false },
    { value: "beige", label: "Beige", checked: false },
    { value: "blue", label: "Blue", checked: true },
    { value: "brown", label: "Brown", checked: false },
    { value: "green", label: "Green", checked: false },
    { value: "purple", label: "Purple", checked: false },
  ],
  size: [
    { value: "xs", label: "XS", checked: false },
    { value: "s", label: "S", checked: true },
    { value: "m", label: "M", checked: false },
    { value: "l", label: "L", checked: false },
    { value: "xl", label: "XL", checked: false },
    { value: "2xl", label: "2XL", checked: false },
  ],
  category: [
    { value: "all-new-arrivals", label: "All New Arrivals", checked: false },
    { value: "tees", label: "Tees", checked: false },
    { value: "objects", label: "Objects", checked: false },
    { value: "sweatshirts", label: "Sweatshirts", checked: false },
    { value: "pants-and-shorts", label: "Pants & Shorts", checked: false },
  ],
};

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
        <div className="p-4  text-center sm:px-6 lg:px-8 mb-7 bg-white rounded-xl shadow-xl dark:bg-primaryDark">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Servicios
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Selecciona un servicio para continuar
          </p>

          {/* Filters */}
          <FilterStepOne />
        </div>
        {/* Product grid */}
        <section
          aria-labelledby="products-heading"
          className="overflow-hidden "
        >
          <div className="space-x-5 grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <CardServiceStepOne product={product} key={product.id}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
