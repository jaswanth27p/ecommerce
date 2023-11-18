/* eslint-disable react/prop-types */
import OrderCard from "./OrderCard";
import { useCart } from "../../store/cartSlice";

const Orders = ( ) => {
  const cart = useCart();
  return (
    <div className="bg-white  sm:m-6 mb-10">
      <div className="sm:p-6">
        <h1 className="m-6 text-center  font-bold text-4xl">Orders</h1>
        {cart.orders.length === 0 ? (
          <p className="text-center text-gray-600">Nothing to show</p>
        ) : (
          <div className="grid mt-4 grid-cols-1   lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {cart.orders.map((order) => (
              <div key={order.id} className="max-w-s">
                <OrderCard order={order} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
