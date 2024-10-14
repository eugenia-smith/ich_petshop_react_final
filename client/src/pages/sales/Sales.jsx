import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import SaleCard from "../../components/saleCard";
import { Link } from "react-router-dom";

import { fetchSales } from "../../helpers/fetch";

function Sales() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetchSales(setSales);
  }, []);

  return (
    <section className={styles.sales_section}>
      <div className={styles.breadcrumbs}>
        <Link to={"/"}>
          <div>Main page</div>
        </Link>
        <div>All sales</div>
      </div>

      <div className={styles.main_categories_header}>
        <h2 className={styles.section_heading}>Discounted items</h2>
      </div>
      <ul className={styles.categories_list}>
        {sales.map((elem, index) => (
          <li key={index}>
            <SaleCard elem={elem} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sales;
