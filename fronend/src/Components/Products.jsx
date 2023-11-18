/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Product from "./Product";
import { useProducts } from "./ProductsContext";

export default function Products(props) {
  const { products } = useProducts();
  const Products = Object.values(products[props.content].products);
  return (
    <div className="bg-white shadow-lg">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
          {props.title}
        </h2>
        <div className="mx-3 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Products.map((prod) => (
            <Product key={prod.id} product={prod} />
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
