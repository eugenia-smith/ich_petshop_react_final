import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import Breadcrumbs from "../../components/breadcrumbs";

import { fetchCategories } from "../../helpers/fetch";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <main className={styles.main_categories}>
      <div className={styles.main_categories_header}>
        <Breadcrumbs
          parents={[{ title: "Main page", path: "/" }]}
          title="Categories"
        />
        <h2 className={styles.section_heading}>Categories</h2>
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
    </main>
  );
}

export default Categories;
