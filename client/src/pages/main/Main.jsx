import styles from "./styles.module.css";
import { useState, useEffect } from "react";

import CategoryCard from "../../components/categoryCard";
import SaleCard from "../../components/saleCard";
import formImage from "../../assets/images/form_image.png";

import { fetchCategories, fetchSales } from "../../helpers/fetch";

import { Link } from "react-router-dom";

function Main() {
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetchCategories(setCategories);
    fetchSales(setSales);
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.main_banner}>
        <p className={styles.main_slogan}>
          Amazing Discounts <br /> on Pets Products!
        </p>
        <Link to="/sales" className={styles.main_cta_btn}>
          Check out
        </Link>
      </section>

      <section className={styles.main_categories}>
        <div className={styles.main_categories_header}>
          <h2 className={styles.section_heading}>Categories</h2>
          <Link to="/categories">All categories</Link>
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

      <section className={styles.sales_section}>
        <div className={styles.main_categories_header}>
          <h2 className={styles.section_heading}>Sales</h2>
          <Link to="/sales">All sales</Link>
        </div>
        <ul className={styles.categories_list}>
          {sales.slice(0, 4).map((elem, index) => (
            <li key={index}>
              <SaleCard elem={elem} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
