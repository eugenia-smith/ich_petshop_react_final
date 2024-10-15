import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import SaleCard from "../../components/saleCard";
import ProductsFilter from "../../components/productsFilter";
import React from "react";
import { fetchProducts } from "../../helpers/fetch";

import Breadcrumbs from "../../components/breadcrumbs";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <main className={styles.products_section}>
      <Breadcrumbs
        parents={[{ title: "Main page", path: "/" }]}
        title="All products"
      />

      <div className={styles.main_categories_header}>
        <h2 className={styles.section_heading}>All products</h2>
        <ProductsFilter products={products} setProducts={setFilteredProducts} />
      </div>
      <ul className={styles.categories_list}>
        {filteredProducts.map((elem, index) => (
          <li key={index}>
            <SaleCard elem={elem} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Products;
