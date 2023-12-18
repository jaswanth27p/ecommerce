/* eslint-disable react/prop-types */
import { useAddToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function Product({product}) {
  const  addToCart  = useAddToCart();
  return (
    <div
      key={product.id}
      className=" shadow min-w-[200px]  sm:transform sm:transition-transform sm:hover:scale-105 group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.imageSrc}
            alt="Image Not Found"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </Link>
      <div className="p-3 mt-4 flex justify-between">
        <Link to={`/product/${product.id}`}>
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
        </Link>
        <div className="">
          <p className="text-sm font-medium text-center text-gray-900 pb-2  ">
            {product.price}
          </p>
          <button
            onClick={() => {addToCart(product.id)}}
            className="  hover:bg-violet-700 font-bold text-white bg-violet-500 px-4 rounded-md"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
