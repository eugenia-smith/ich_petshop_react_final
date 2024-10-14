import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";

import { fetchCategories } from "../../helpers/fetch";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.main_categories}>
        <div className={styles.main_categories_header}>
          <h2 className={styles.section_heading}>All categories</h2>
        </div>
        <ul className={styles.categories_list}>
          {categories.map((elem, index) => (
            <li key={index}>
              <Link to={"/categories/" + elem.id}>
                <CategoryCard elem={elem} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Categories;
