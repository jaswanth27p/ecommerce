/* eslint-disable react/prop-types */
import { useState ,useEffect } from "react"; // Import useState
import { useCart } from "../store/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ( ) => {
  const cart=useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProDropdownOpen, setProDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleProDropdown = () => {
    setProDropdownOpen(!isProDropdownOpen);
  };
  useEffect(()=>{
    setProDropdownOpen(false);
    setDropdownOpen(false);
  },[navigate]);

  return (
    <nav className=" w-full h-fit bg-violet-500 text-white p-4">
      <NavLink to="/">
        <h1 className="inline-block font-extrabold text-2xl">Sopping</h1>
      </NavLink>

      {/* Responsive Menu Button */}
      <div className="block sm:hidden float-right py-1">
        <button className=" px-2 inline-block" onClick={toggleDropdown}>
          ☰
        </button>
        <i
          onClick={toggleProDropdown}
          className=" px-2 fa-solid fa-user inline-block"
        ></i>
        <NavLink to="/cart">
          <i className=" px-2 fa-solid fa-cart-shopping inline-block">
            {cart.cartItems.length > 0 && (
              <span className=" font-thin text-xs text-center absolute top-4 right-4 rounded-full bg-red-500  min-w-[12px]">
                {cart.cartItems.length}
              </span>
            )}
          </i>
        </NavLink>
      </div>
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <ul
          onMouseLeave={toggleDropdown}
          className="sm:hidden bg-violet-500  text-white mt-2 py-2 w-full"
        >
          <NavLink to="/">
            <li className="border-b p-2 text-center hover:bg-violet-400   ">
              Home
            </li>
          </NavLink>
          <NavLink to="/products/men">
            <li className="border-b p-2 text-center hover:bg-violet-400   ">
              Men
            </li>
          </NavLink>
          <NavLink to="/products/women">
            <li className="border-b p-2 text-center hover:bg-violet-400   ">
              Women
            </li>
          </NavLink>
          <NavLink to="/products/kids">
            <li className=" border-b p-2 text-center hover:bg-violet-400   ">
              Kids
            </li>
          </NavLink>
        </ul>
      )}
      {/* Profile Dropdown */}
      {isProDropdownOpen && (
        <div
          onMouseLeave={toggleProDropdown}
          className="absolute w-fit top-10 z-10 right-2 mt-2 py-2  bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          <ul className="m-2">
            <li className="rounded-lg text-center border-b hover:bg-violet-50">
              <a className=" text-violet-500 text-[18px] " href="#">
                Profile
              </a>
            </li>
            <li className="rounded-lg text-center px-4 hover:bg-violet-50">
              <NavLink
                to="/orders"
                className=" text-violet-500 text-[18px]"
                href="#"
              >
                Orders
              </NavLink>
            </li>
            <li className="rounded-lg text-center border-t px-4 hover:bg-violet-50">
              <a className=" text-red-400 text-[18px]" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Regular Menu (hidden on small screens) */}
      <ul className="hidden sm:flex float-right">
        <li className="px-6 hover:bg-violet-400 rounded-md ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:bg-violet-400 rounded-md px-6">
          <NavLink to="/products/men">Men</NavLink>
        </li>
        <li className="hover:bg-violet-400 rounded-md px-6">
          <NavLink to="/products/women">Women</NavLink>
        </li>
        <li className="hover:bg-violet-400 rounded-md px-6">
          <NavLink to="/products/kids">Kids</NavLink>
        </li>
        <li className="hover:bg-violet-400 rounded-md px-3">
          <i onClick={toggleProDropdown} className=" fa-solid fa-user"></i>
        </li>
        <li className="hover:bg-violet-400 rounded-md px-3">
          <NavLink to="/cart">
            <i className=" fa-solid fa-cart-shopping">
              {cart.cartItems.length > 0 && (
                <span className=" font-thin text-xs text-center absolute top-4 right-4 rounded-full bg-red-500  min-w-[12px]">
                  {cart.cartItems.length}
                </span>
              )}
            </i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
