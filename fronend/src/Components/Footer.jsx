import { Link } from "react-router-dom";

function Footer() {
 
  return (
    <footer className="bg-violet-500 text-white py-6">
      <div className="mb-4 md:mb-0">
        <h3 className="block text-center text-2xl font-bold mx-2">Sopping</h3>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
        <div className="flex w-full justify-evenly text-center max-w-[900px]">
          <div>
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul>
              <li>
                <Link   to="/ ">
                  Home
                </Link>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Categories</h4>
            <ul>
              <li>
                <Link   to="/products/men">
                  Men
                </Link>
              </li>
              <li>
                <Link   to="/products/women">
                  Women
                </Link>
              </li>
              <li>
                <Link   to="/products/kids">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sopping. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
