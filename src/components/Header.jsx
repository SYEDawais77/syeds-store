import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Store Name */}
        <h1 className="text-3xl font-bold">
          <Link to="/">Syed&#39;s Store</Link>
        </h1>

        {/* Navigation */}
        <nav>
          <div className="flex space-x-8 pr-24">
            <Link to="/" className="hover:text-gray-200 cursor-pointer">
              Home
            </Link>

            <Link to="/products" className="hover:text-gray-200 cursor-pointer">
              Products
            </Link>
            <Link to="/cart" className="hover:text-gray-200 cursor-pointer">
              Cart
            </Link>

            <Link to="/about" className="hover:text-gray-200 cursor-pointer">
              About
            </Link>

            <Link to="/contact" className="hover:text-gray-200 cursor-pointer">
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <hr className="border-t border-white opacity-20" />
    </header>
  );
}
