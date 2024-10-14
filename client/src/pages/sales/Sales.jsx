import styles from "./styles.module.css";
import { useState, useEffect } from "react";

import SaleCard from "../../components/saleCard";

import { fetchSales } from "../../helpers/fetch";

function Sales() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetchSales(setSales);
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.sales_section}>
        <div className={styles.main_categories_header}>
          <h2 className={styles.section_heading}>All sales</h2>
        </div>
        <ul className={styles.categories_list}>
          {sales.map((elem, index) => (
            <li key={index}>
              <SaleCard elem={elem} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Sales;
