/* eslint-disable react/prop-types */
import { useCart ,useDecrementQuantity,useIncrementQuantity,useRemoveFromCart} from "../../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../ProductsContext";
const Cart = () => {
  const productDict = useProducts();
  const products = Object.values({
    ...productDict.products.MEN.products,
    ...productDict.products.WOMEN.products,
    ...productDict.products.KIDS.products,
  });

  const cart = useCart();
  const decrementQuantity = useDecrementQuantity(); // Function to decrement quantity
  const incrementQuantity = useIncrementQuantity(); // Function to increment quantity
  const removeFromCart = useRemoveFromCart(); 
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    let total = 0;
    for (const cartItem of cart.cartItems) {
      const product = products.find((p) => p.id === cartItem.productId);
      if (product) {
        total += parseFloat(product.price) * (cartItem.quantity); // Use cart.quantities for quantity
      }
    }
    return total.toFixed(2); // Format total to two decimal places
  };
  const isCartEmpty = cart.cartItems.length === 0;
  if (isCartEmpty) {
    return (
      <div
        id="cart"
        className="flex w-full h-full flex-col overflow-y-scroll bg-white shadow-xl"
      >
        <div className="flex-1 content-center overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h1 className="w-full text-center font-bold text-4xl text-gray-900">
              Shopping cart
            </h1>
          </div>
          <p className="block text-center mt-4 text-gray-500">
            Nothing in the Cart{" "}
            <button
              onClick={handleGoBack}
              className="text-indigo-600 hover:underline"
            >
              Continue Shopping
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:m-10 flex  h-full flex-col   bg-white shadow-lg">
      <div className="flex-1 content-center overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className="  font-bold text-4xl text-gray-900">Shopping cart</h1>
        </div>
        <div className="sm:flex ">
          <div className=" w-full sm:px-6 sm:w-1/2 inline-block mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.cartItems.map((cartItem) => {
                  const product = products.find((p) => p.id === cartItem.productId);
                  if (!product) return null;

                  return (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            Qty {cartItem.quantity}
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => decrementQuantity(product.id)}
                              className="border px-2 rounded-md border-violet-500 font-semibold mx-1 text-violet-600  "
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => incrementQuantity(product.id)}
                              className="border px-2 rounded-md   border-violet-500 font-semibold mx-1 text-violet-600  "
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeFromCart(product.id)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full  sm:w-1/2 sm:border-l-2 sm:border-gray-300 px-4 py-6 sm:px-6 flex flex-col justify-center">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹{calculateTotal()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <button
                type="button"
                onClick={handleGoBack}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
