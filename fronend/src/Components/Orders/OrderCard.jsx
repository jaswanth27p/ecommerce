/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TrackingBar from "./TrackingBar";
import { useProducts } from "../ProductsContext";
import { useRemoveOrder } from "../../store/cartSlice";

function OrderCard(props) {
  const productDict = useProducts();
  const products = Object.values({
    ...productDict.products.MEN.products,
    ...productDict.products.WOMEN.products,
    ...productDict.products.KIDS.products,
  });
  const  removeOrder  = useRemoveOrder();
  return (
    <>
      <div className="shadow-lg w-full h-fit p-3">
        {props.order.products.map((product) => {
          // Find the corresponding product details using product productId
          const productItem = products.find(
            (item) => item.id === product.productId
          );

          if (!productItem) {
            return null; // Handle the case where productItem is not found
          }

          return (
            <div
              key={product.productId}
              className="flex rounded-lg rounded-b-none mb-3"
            >
              <div className="w-1/3 p-2">
                <img
                  key={product.productId}
                  className="rounded-lg"
                  src={productItem.imageSrc}
                  alt={productItem.name}
                />
              </div>
              <div className="w-2/3 flex flex-col justify-around p-2">
                <div>
                  <h1 className="font-medium text-lg">{productItem.name}</h1>
                  <p>{productItem.color}</p>
                </div>
                <div>
                  <p>
                    <span className="font-medium">Price : </span>₹
                    {productItem.price} x {product.quantity} = ₹
                    {parseFloat(productItem.price) * product.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="p-5">
          <h2>
            <span className="font-medium">Total : </span>₹
            {props.order.products.reduce((total, product) => {
              // Find the corresponding product details using product productId
              const productItem = products.find(
                (item) => item.id === product.productId
              );

              if (!productItem) {
                return total; // Handle the case where productItem is not found
              }

              return total + parseFloat(productItem.price) * product.quantity;
            }, 0)}
          </h2>
          <p className="mt-2 font-m">
            <span className="font-medium">Ordered Date : </span>
            {new Date(props.order.orderedDateTime).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Payment Method : </span>
            {props.order.paymentMethod}
          </p>
        </div>

        <div className="p-3 border rounded-lg rounded-t-none">
          <p>Order By : {props.order.name}</p>
          <p>Mobile : {props.order.mobileNumber}</p>
          <p className="truncate">Address : {props.order.address}</p>

          <div className="w-full">
            <TrackingBar status={props.order.orderStatus} />
          </div>
          <button
          onClick={()=>removeOrder(props.order.id)}
           className="rounded-md px-3 py-1 bg-red-400 hover:bg-red-500 text-white mt-3 block ml-auto">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
