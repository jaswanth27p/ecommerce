/* eslint-disable react/prop-types */
import Slider from "./Slider"
import Products from './Products'

const Home = ( ) => {
  return (
    <>
      <Slider />
      <Products
        title="Best Products"
        content="BEST"
      />
      <Products
        title="Top Selling Products"
        content="TOP"
      />
    </>
  );
}

export default Home