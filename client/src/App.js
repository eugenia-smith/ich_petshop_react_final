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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
