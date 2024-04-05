import { Disclosure } from "@headlessui/react";
import { configTaiwind } from "../../../../../../utils/configTaiwind";

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
          <Disclosure
            as="section"
            aria-labelledby="filter-heading"
            className="grid items-center  border-t border-gray-200 dark:border-gray-700"
          >
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>
            <div className="relative col-start-1 row-start-1 py-4">
              <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                <div>
                  <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                    2 Filters
                  </Disclosure.Button>
                </div>
                <div className="pl-6">
                  <button type="button" className="text-gray-500">
                    Clear all
                  </button>
                </div>
              </div>
            </div>
            <div className="col-start-1 row-start-1 py-4">
              <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                {/* Sort */}
              </div>
            </div>
          </Disclosure>
        </div>
        {/* Product grid */}
        <section
          aria-labelledby="products-heading"
          className="mx-auto  overflow-hidden sm:px-6 lg:px-8"
        >
          

          <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
              >
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="mt-3 flex flex-col items-center">
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <>{rating}</>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.reviewCount} reviews
                    </p>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
};
