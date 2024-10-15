import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SaleCard from "../../components/saleCard";
import ProductsFilter from "../../components/productsFilter";
import Breadcrumbs from "../../components/breadcrumbs";

import { fetchCategory } from "../../helpers/fetch";

function Category() {
  const [serverData, setServerData] = useState({
    category: {},
    data: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    fetchCategory(setServerData, categoryId);
  }, []);
  return (
    <main className={styles.main_container}>
      <Breadcrumbs
        parents={[
          { title: "Main page", path: "/" },
          { title: "Categories", path: "/categories" },
        ]}
        title={serverData.category.title}
      />
      <section className={styles.main_categories}>
        <h2 className={styles.section_heading}>{serverData.category.title}</h2>
        <ProductsFilter
          products={serverData.data}
          setProducts={setFilteredProducts}
        />
        <ul className={styles.categories_list}>
          {filteredProducts.map((elem, index) => (
            <li key={index}>
              <SaleCard elem={elem} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Category;
