import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";

import SaleCard from "../../components/saleCard";

import { fetchProducts } from "../../helpers/fetch";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <section className={styles.products_section}>
      <div className={styles.breadcrumbs}>
        <Link to={"/"}>
          <div>Main page</div>
        </Link>
        <div>All products</div>
      </div>

      <div className={styles.main_categories_header}>
        <h2 className={styles.section_heading}>All products</h2>
      </div>
      <ul className={styles.categories_list}>
        {products.map((elem, index) => (
          <li key={index}>
            <Link to={"/products/" + elem.id}>
              <SaleCard elem={elem} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
