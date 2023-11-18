import { useState ,useEffect } from "react";
import { useCart ,useClearCart,useAddOrder ,useUpdateOrderNumber} from "../../store/cartSlice";
import { useProducts } from "../ProductsContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../NotificationContext";
const CheckOut = () => {
  
  const showNotification = useNotification();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    paymentMethod: "creditCard", // Default to Credit Card
  });

  // function luhnCheck(value) {
  //   let sum = 0;
  //   let shouldDouble = false;
  //   for (let i = value.length - 1; i >= 0; i--) {
  //     let digit = parseInt(value[i]);
  //     if (shouldDouble) {
  //       digit *= 2;
  //       if (digit > 9) {
  //         digit -= 9;
  //       }
  //     }
  //     sum += digit;
  //     shouldDouble = !shouldDouble;
  //   }
  //   return sum % 10 === 0;
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handlePaymentMethodChange = (method) => {
  //   setFormData({ ...formData, paymentMethod: method });
  // };

 

  // const handleConfirmPayment = () => {

  //   // Validate first name and last name
  //   if (!formData.firstName || !formData.lastName) {
  //     showNotification("Please enter your first name and last name.");
  //     return;
  //   }

  //   // Validate address
  //   if (!formData.address || !formData.city || !formData.zipCode) {
  //     showNotification("Please enter your complete address.");
  //     return;
  //   }
  //   // Validate zip code
  //   if (isNaN(formData.zipCode) || formData.zipCode.trim() === "") {
  //     alert("Please enter a valid numeric zip code.");
  //     return;
  //   }
  //   // Validate mobile number
  //   const mobileNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number
  //   if (
  //     !formData.mobileNumber ||
  //     !mobileNumberRegex.test(formData.mobileNumber)
  //   ) {
  //     showNotification("Please enter a valid 10-digit mobile number.");
  //     return;
  //   }
    
  //   if (formData.paymentMethod === "creditCard") {
  //     // Validate credit card number
  //     const cardNumber = formData.cardNumber.replace(/\s+/g, ""); // Remove spaces

  //     if (!cardNumber) {
  //       showNotification("Please enter a valid credit card number.");
  //       return;
  //     }

  //     if (!luhnCheck(cardNumber)) {
  //       showNotification("Please enter a valid credit card number.");
  //       return;
  //     }

  //     const expDate = formData.expDate.trim(); // Remove leading/trailing spaces
  //     console.log("Expiration Date:", expDate);

  //     // Validate expiration date
  //     const currentDate = new Date();
  //     const expDateParts = formData.expDate.split("/");
  //     const expMonth = parseInt(expDateParts[0], 10);
  //     const expYear = parseInt(expDateParts[1], 10);
  //     console.log(currentDate.getFullYear());
  //     if (
  //       isNaN(expMonth) ||
  //       isNaN(expYear) ||
  //       expMonth < 1 ||
  //       expMonth > 12 ||
  //       2000+expYear < currentDate.getFullYear() ||
  //       (2000+expYear === currentDate.getFullYear() &&
  //         expMonth <= currentDate.getMonth() + 1)  
  //     ) {
  //       showNotification("Please enter a valid expiration date (MM/YY).");
  //       return;
  //     }

  //     // Validate CVV
  //     if (!formData.cvv || formData.cvv.length !== 3 || isNaN(formData.cvv)) {
  //       showNotification("Please enter a valid 3-digit CVV.");
  //       return;
  //     }
  //   }
  //   // Create the order object
  //   const order = {
  //     id: cart.orderNumber,
  //     products: cart.cartItems,
  //     totalPrice: total,
  //     name: `${formData.firstName} ${formData.lastName}`,
  //     address: `${formData.address}, ${formData.city}, ${formData.zipCode}`,
  //     mobileNumber: formData.mobileNumber,
  //     paymentMethod: formData.paymentMethod,
  //     orderStatus: 1,
  //     orderedDateTime: new Date().toISOString(), // Use current date and time
  //   };
  //   // Add the order to cart.orders
  //   addOrder(order);

  //   updateOrderNumber(cart.orderNumber + 1);
  //   // Clear the cart
  //   clearCart();
  //   navigate("/orders", { replace: true });

  //   // Redirect to a confirmation page or any other desired action
  // };

 
  const cart =useCart();
  const clearCart= useClearCart();
  const addOrder =useAddOrder();
  const updateOrderNumber= useUpdateOrderNumber();
  useEffect(() => {
    // Check if the cart is empty and navigate to the home page if it is
    if (cart.cartItems.length === 0) {
      navigate("/", { replace: true });
    }
  }, [cart, navigate]);

  let total = 0;

  const productDict = useProducts();
  const products = Object.values({
    ...productDict.products.MEN.products,
    ...productDict.products.WOMEN.products,
    ...productDict.products.KIDS.products,
  });
  
  const handleSubmit = (e) => {
    if (total === "") {
      alert("Please enter an amount");
    } else {
    // Check if Razorpay script is already loaded
      if (window.Razorpay) {
        handlePayment();
      } else {
      // Razorpay script is not loaded, so load it and then handle the payment
      loadRazorpayScript(handlePayment);
      }
      }
  };

  // Function to load Razorpay script
  const loadRazorpayScript = (callback) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = callback; // Callback function to execute after the script is loaded
    document.head.appendChild(script);
  };



  const handlePayment = (e) => {
    if (total === "") {
      alert("please enter amount");
    } else {
      loadRazorpayScript();
      var options = {
        key: "rzp_test_5dI2MFiYpqED0z",
        key_secret: "AExZ7srrhtSwFD3dN09Be56j",
        amount: total * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          console.log(response.razorpay_payment_id);

          const order = {
            id: cart.orderNumber,
            products: cart.cartItems,
            totalPrice: total,
            name: `${formData.firstName} ${formData.lastName}`,
            address: `${formData.address}, ${formData.city}, ${formData.zipCode}`,
            mobileNumber: formData.mobileNumber,
            paymentMethod: formData.paymentMethod,
            orderStatus: 1,
            orderedDateTime: new Date().toISOString(), // Use current date and time
          };
          // Add the order to cart.orders
          addOrder(order);

          updateOrderNumber(cart.orderNumber + 1);
          // Clear the cart
          clearCart();
          navigate("/orders", { replace: true });
        },
        prefill: {
          name: "Velmurugan",
          email: "mvel1620r@gmail.com",
          contact: "7904425033",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      let validate = true
      // Validate first name and last name
      if (!formData.firstName || !formData.lastName) {
        showNotification("Please enter your first name and last name.");
        validate =false
      }

      // Validate address
      else if (!formData.address || !formData.city || !formData.zipCode) {
        showNotification("Please enter your complete address.");
        validate = false;
      }
      // Validate zip code
      else if (isNaN(formData.zipCode) || formData.zipCode.trim() === "") {
        validate("Please enter a valid numeric zip code.");
        validate = false;
      }else{
        // Validate mobile number
        const mobileNumberRegex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number
        if (
          !formData.mobileNumber ||
          !mobileNumberRegex.test(formData.mobileNumber)
        ) {
          showNotification("Please enter a valid 10-digit mobile number.");
          validate = false;
        }
      }
      if (validate)
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <>
      <div className="flex flex-col  justify-center md:flex-row">
        {/* Left side (Order details and Personal details) */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Products</h3>
            {cart.cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.productId);
              if (!product) return null;

              const quantity = cartItem.quantity;
              total = product.price * quantity + total;

              return (
                <div key={product.id} className="mb-4">
                  <p className=" font-normal">Product Name : {product.name}</p>
                  <p>Color : {product.color}</p>
                  <p>Price : ₹{product.price}</p>
                  <p>Quantity : {quantity}</p>
                </div>
              );
            })}
            <p>
              <strong> Total: </strong>₹{total}
            </p>
            <h3 className=" inline text-md font-medium mt-4 mb-2">
              Estimated Time of Delivery :
            </h3>
            <p className="inline"> 2-3 business days</p>
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Personal Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-center text-white px-4 py-2 rounded mt-4 mx-auto block"
          >
            Continue Payment
          </button>
        </div>

        {/* Right side (Payment form) */}
        {/* <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => handlePaymentMethodChange("creditCard")}
              className={`${
                formData.paymentMethod === "creditCard"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded`}
            >
              Credit Card
            </button>
            <button
              onClick={() => handlePaymentMethodChange("upi")}
              className={`${
                formData.paymentMethod === "upi"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded`}
            >
              UPI
            </button>
            <button
              onClick={() => handlePaymentMethodChange("cashOnDelivery")}
              className={`${
                formData.paymentMethod === "cashOnDelivery"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded`}
            >
              Cash on Delivery
            </button>
          </div>
          <form className="space-y-4 mt-4">
            {formData.paymentMethod === "creditCard" && (
              <div>
                <label htmlFor="cardNumber" className="block text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Eg : 4111111111111111"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            )}
            {formData.paymentMethod === "creditCard" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expDate" className="block text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expDate"
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    placeholder="123"
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
              </div>
            )}
            {formData.paymentMethod === "upi" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">UPI Methods</h3>
                <div className="flex space-x-4">
                  <p
                    className={`${
                      formData.upiMethod === "upi1"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    } px-4 py-2 rounded`}
                  >
                    UPI 1
                  </p>
                  <p
                    className={`${
                      formData.upiMethod === "upi2"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    } px-4 py-2 rounded`}
                  >
                    UPI 2
                  </p>
                  <p
                    className={`${
                      formData.upiMethod === "upi3"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    } px-4 py-2 rounded`}
                  >
                    UPI 3
                  </p>
                </div>
              </div>
            )}
            {formData.paymentMethod === "cashOnDelivery" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Cash on Delivery</h3>
                <label className="block text-gray-700">
                  <input
                    type="checkbox"
                    name="cashOnDelivery"
                    checked={formData.cashOnDelivery}
                  />
                  <span className="ml-2">
                    I agree to pay by Cash on Delivery
                  </span>
                </label>
              </div>
            )}
          </form>
          <button
            onClick={handleConfirmPayment}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Confirm Payment
          </button>
        </div> */}
      </div>
    </>
  );
};

export default CheckOut;
