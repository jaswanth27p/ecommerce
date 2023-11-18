/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Product from "../Product";
import { useProducts } from "../ProductsContext";
import { BiSad } from "react-icons/bi";


export default function Products(props) {
  const { products } = useProducts();
  const Products = Object.values(products[props.content].products);
  const selectedFilters =props.selectedFilters;
  const order = props.order
  // Filter products based on selected filters
  const filteredProducts = Object.values(Products).filter((product) => {
    // Check color filter
    if (selectedFilters.color.length > 0) {
      if (!selectedFilters.color.includes(product.color[0])) {
        return false; // Product doesn't match the color filter
      }
    }

    // Check category filter
    if (selectedFilters.category.length > 0) {
      if (
        !selectedFilters.category.some((categoryId) =>
          product.category.includes(categoryId)
        )
      ) {
        return false; // Product doesn't match the category filter
      }
    }

    // Check size filter
    if (selectedFilters.size.length > 0) {
      if (
        !selectedFilters.size.some((selectedSize) =>
          product.sizes.some(
            (size) => size.name.toLowerCase() === selectedSize && size.inStock
          )
        )
      ) {
        return false; // Product doesn't match the size filter
      }
    }

    return true; // Product matches all selected filters
  });

  
  if (order == "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (order == "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }


  return (
    <div className="bg-white shadow-lg">
      <div className="mx-auto  max-w-2xl px-4   sm:px-6  pb-5 lg:max-w-7xl lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <BiSad className="inline-block" size={150} />
            <p className="text-center text-gray-500 mt-6">
              No products matching the selected filters.
            </p>
          </div>
        ) : (
          <div className="mx-3 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map((prod, index) => (
              <Product key={prod.id || index} product={prod} />
            ))}
          </div>
        )}
      </div>
      <hr></hr>
    </div>
  );
}
