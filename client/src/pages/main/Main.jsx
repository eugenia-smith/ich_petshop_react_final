import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../../components/categoryCard";
import formImage from "../../assets/images/form_image.png";

function Main() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:3333/categories/all"
      );
      setCategories(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.main_banner}>
        <p className={styles.main_slogan}>
          Amazing Discounts <br /> on Pets Products!
        </p>
        <a href="#" className={styles.main_cta_btn}>
          Check out
        </a>
      </section>

      <section className={styles.main_categories}>
        <div className={styles.main_categories_header}>
          <h2 className={styles.section_heading}>Categories</h2>
          <a href="#">All categories</a>
        </div>
        <ul className={styles.categories_list}>
          {categories.slice(0, 4).map((elem, index) => (
            <li key={index}>
              <CategoryCard elem={elem} />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.discount_section}>
        <h2 className={styles.custom_section_heading}>
          5% off on the first order
        </h2>

        <div className={styles.form_wrapper}>
          <picture>
            <img src={formImage} alt="" />
          </picture>

          <form className={styles.discount_form} action="">
            <input type="text" name="username" id="" placeholder="Name" />
            <input
              type="tel"
              name="telephone"
              id=""
              placeholder="Phone number"
            />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="submit" value="Get a discount" />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Main;
