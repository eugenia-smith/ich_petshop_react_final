import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import SaleCard from "../../components/saleCard";
import React from "react";
import { InputNumber, Checkbox, Button, Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { fetchProducts } from "../../helpers/fetch";

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

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <section className={styles.products_section}>
      <div className={styles.breadcrumbs}>
        <Link to={"/"}>
          <div>Main page</div>
        </Link>
        <div>All products</div>
      </div>

      <div className={styles.main_categories_header}>
        <h2 className={styles.section_heading}>All products</h2>
        <div className={styles.filters_container}>
          <label className={styles.price_range_container}>
            Price
            <InputNumber min={1} max={1000} defaultValue={"from"} />
            <InputNumber min={1} max={1000} defaultValue={"to"} />
          </label>

          <label>
            Discounted items
            <Checkbox className="custom-checkbox" />
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
        {products.map((elem, index) => (
          <li key={index}>
            <Link to={"/products/" + elem.id}>
              <SaleCard elem={elem} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
