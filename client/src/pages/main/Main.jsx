import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import CategoryCard from "../../components/categoryCard";
import SaleCard from "../../components/saleCard";
import formImage from "../../assets/images/form_image.png";

import { fetchCategories, fetchSales } from "../../helpers/fetch";

function Main() {
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetchCategories(setCategories);
    fetchSales(setSales);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitData(data) {
    try {
      const response = await axios.post(
        "http://localhost:3333/sale/send",
        data
      );
      console.log(response.data); //что там с сервером...?

      if (response.data.status === "OK") {
        console.log("Data sent!");
        reset();
      }
    } catch (error) {
      console.error("Failed to send", error);
    }
  }

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

          <form
            className={styles.discount_form}
            onSubmit={handleSubmit(submitData)}
          >
            <input
              type="text"
              name="username"
              placeholder="Name"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className={styles.error}>The field cannot be empty!</p>
            )}
            <input
              type="tel"
              name="telephone"
              placeholder="Phone number"
              {...register("telephone", {
                required: true,
                pattern:
                  /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
              })}
            />
            {errors.telephone && (
              <p className={styles.error}>Invalid format!</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className={styles.error}>Check your email!</p>}
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
