import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import SaleCard from "../../components/saleCard";
import ProductsFilter from "../../components/productsFilter";

import Breadcrumbs from "../../components/breadcrumbs";

import { fetchSales } from "../../helpers/fetch";

function Sales() {
  const [sales, setSales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  useEffect(() => {
    fetchSales(setSales);
  }, []);

  return (
    <main className={styles.sales_section}>
      <Breadcrumbs
        parents={[{ title: "Main page", path: "/" }]}
        title="All sales"
      />

      <div className={styles.main_categories_header}>
        <h2 className={styles.section_heading}>Discounted items</h2>
        <ProductsFilter
          products={sales}
          setProducts={setFilteredSales}
          showOnlyDiscounted={true}
        />
      </div>
      <ul className={styles.categories_list}>
        {filteredSales.map((elem, index) => (
          <li key={index}>
            <SaleCard elem={elem} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Sales;
