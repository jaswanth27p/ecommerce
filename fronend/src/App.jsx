/* eslint-disable no-unused-vars */
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart/Cart";
import ProductlistLayout from "./Components/Productlist/ProductlistLayout";
import ProductView from "./Components/ProductView/ProductView";
import Orders from "./Components/Orders/Orders";
import Checkout from "./Components/Cart/CheckOut";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
import { ProductsContext } from "./Components/ProductsContext";
import NotificationProvider from "./Components/NotificationContext";
import { Provider } from "react-redux";
import store from "./store/store"

function App() {
  

  return (
    <>
      <Provider store={store}>
        <NotificationProvider>
          <ScrollToTop />
          <ProductsContext>
            <div className="flex flex-col min-h-screen">
              <Nav />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/products/men"
                    element={<ProductlistLayout content={"MEN"} />}
                  />
                  <Route
                    path="/products/women"
                    element={<ProductlistLayout content={"WOMEN"} />}
                  />
                  <Route
                    path="/products/kids"
                    element={<ProductlistLayout content={"KIDS"} />}
                  />

                  <Route path="product/:productId" element={<ProductView />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="checkout" element={<Checkout />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </ProductsContext>
        </NotificationProvider>
      </Provider>
    </>
  );
}

export default App;
