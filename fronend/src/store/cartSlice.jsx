// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch ,useSelector } from "react-redux";
import { useNotification } from "../Components/NotificationContext";
const initialState = {
  cartItems: [],
  orders: [],
  orderNumber: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.productId === action.payload
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ productId: action.payload, quantity: 1 });
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
    },
    CLEAR_CART: (state) => {
      state.cartItems = [];
    },
   ADD_ORDER: (state, action) => {
      state.orders.unshift(action.payload);
    },
    INCREMENT_QUANTITY: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },
    DECREMENT_QUANTITY: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== action.payload
        );
      }
    },
    UPDATE_ORDER_NUMBER: (state, action) => {
      state.orderNumber = action.payload;
    },
    REMOVE_ORDER: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const useCart = () => {
  return useSelector((state) => state.cart);
};

export const useAddToCart = () => {
  const showNotification = useNotification();
  const dispatch = useDispatch();
  return (productId) => {
    dispatch({ type: "cart/ADD_TO_CART", payload: productId });
    showNotification("Product added to cart !");
  };
};

export const useRemoveFromCart = () => {
  const showNotification = useNotification();
  const dispatch = useDispatch();
  return (productId) => {
    dispatch({ type: "cart/REMOVE_FROM_CART", payload: productId });
    showNotification("Product removed from cart !");
  };
};

export const useClearCart = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch({ type: "cart/CLEAR_CART" });
  };
};

export const useAddOrder = () => {
  const showNotification = useNotification();
  const dispatch = useDispatch();
  return (order) => {
    dispatch({ type: "cart/ADD_ORDER", payload: order });
    showNotification("Order added Successfully !");
  };
};

export const useIncrementQuantity = () => {
  const dispatch = useDispatch();
  return (productId) => {
    dispatch({ type: "cart/INCREMENT_QUANTITY", payload: productId });
  };
};

export const useDecrementQuantity = () => {
  const dispatch = useDispatch();
  return (productId) => {
    dispatch({ type: "cart/DECREMENT_QUANTITY", payload: productId });
  };
};

export const useUpdateOrderNumber = () => {
  const dispatch = useDispatch();
  return (newOrderNumber) => {
    dispatch({ type: "cart/UPDATE_ORDER_NUMBER", payload: newOrderNumber });
  };
};

export const useRemoveOrder = () => {
  const showNotification = useNotification();
  const dispatch = useDispatch();
  return (orderId) => {
    dispatch({ type: "cart/REMOVE_ORDER", payload: orderId });
    showNotification("Order canceled Successfully !");
  };
};

export default cartSlice.reducer;
