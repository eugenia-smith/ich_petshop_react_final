import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import SaleCard from "../../components/saleCard";
import { Link } from "react-router-dom";
import { InputNumber, Button, Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { fetchSales } from "../../helpers/fetch";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "by default",
    key: "1",
  },
  {
    label: "newest",
    key: "2",
  },
  {
    label: "price: high-low",
    key: "3",
  },
  {
    label: "price: low-high",
    key: "4",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

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
        <div className={styles.filters_container}>
          <label className={styles.price_range_container}>
            Price
            <InputNumber min={1} max={1000} defaultValue={"from"} />
            <InputNumber min={1} max={1000} defaultValue={"to"} />
          </label>

          <label>
            Sorted
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  by default
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </label>
        </div>
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
