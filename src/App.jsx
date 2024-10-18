import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  function onRemove(itemId) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  }

  function onAdd(item) {
    if (cartItems.map((item) => item.id).includes(item.id)) {
      alert("Item already in cart");
      return;
    }
    setCartItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home onAdd={onAdd} />} />
            <Route path="/products" element={<Products onAdd={onAdd} />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} onRemove={onRemove} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
