import { Link, NavLink, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main/Main";
import Categories from "./pages/categories/Categories";
import Category from "./pages/category/Category";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Sales from "./pages/sales/Sales";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/404/404";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
