import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import SaleCard from "../../components/saleCard";

import { fetchCategory } from "../../helpers/fetch";

function Category() {
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    fetchCategory(setCategory, categoryId);
  }, []);
  return (
    <main className={styles.main_container}>
      <section className={styles.main_categories}>
        {"category" in category ? (
          <CategoryCard elem={category.category} />
        ) : (
          <></>
        )}
        {"data" in category ? (
          <ul className={styles.categories_list}>
            {category.data.map((elem, index) => (
              <li key={index}>
                <SaleCard elem={elem} />
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}

export default Category;
