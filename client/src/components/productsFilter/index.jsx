import { InputNumber, Checkbox, Button, Select } from "antd";
import { useState, useEffect } from "react";

import styles from "./styles.module.css";

function getRealPrice(elem) {
  if (elem.discont_price !== null) {
    return elem.discont_price;
  }
  return elem.price;
}

function ProductsFilter({ products, setProducts, showOnlyDiscounted = false }) {
  const [minPriceLimit, setMinPriceLimit] = useState(0);
  const [maxPriceLimit, setMaxPriceLimit] = useState(1000);
  const [minPrice, setMinPrice] = useState(minPriceLimit);
  const [maxPrice, setMaxPrice] = useState(maxPriceLimit);
  const [showDiscounted, setShowDiscounted] = useState(showOnlyDiscounted);
  const [sortMethod, setSortMethod] = useState("DEFAULT");

  useEffect(() => {
    if (products.length > 0) {
      setMinPriceLimit(Math.min(...products.map((elem) => getRealPrice(elem))));
      setMaxPriceLimit(Math.max(...products.map((elem) => getRealPrice(elem))));
    }
    let filteredProducts = products
      .filter((elem) => getRealPrice(elem) >= minPrice)
      .filter((elem) => getRealPrice(elem) <= maxPrice);
    if (showDiscounted) {
      filteredProducts = filteredProducts.filter(
        (elem) => elem.discont_price !== null
      );
    }
    if (sortMethod === "NEWEST") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a.updatedAt < b.updatedAt) {
          return -1;
        }
        if (a.updatedAt > b.updatedAt) {
          return 1;
        }
        return 0;
      });
    }
    if (sortMethod === "HIGHPRICE") {
      filteredProducts = filteredProducts.sort(
        (a, b) => getRealPrice(b) - getRealPrice(a)
      );
    }
    if (sortMethod === "LOWPRICE") {
      filteredProducts = filteredProducts.sort(
        (a, b) => getRealPrice(a) - getRealPrice(b)
      );
    }
    setProducts(filteredProducts);
  }, [minPrice, maxPrice, showDiscounted, sortMethod, products, setProducts]);
  return (
    <div className={styles.filters_container}>
      <label className={styles.price_range_container}>
        Price
        <InputNumber
          min={minPriceLimit}
          max={Math.min(maxPriceLimit, maxPrice)}
          defaultValue={"from"}
          onChange={(e) => setMinPrice(e)}
        />
        <InputNumber
          min={Math.max(minPriceLimit, minPrice)}
          max={maxPriceLimit}
          defaultValue={"to"}
          onChange={(e) => setMaxPrice(e)}
        />
      </label>
      {showOnlyDiscounted ? (
        <></>
      ) : (
        <label>
          Discounted items
          <Checkbox
            className="custom-checkbox"
            onChange={(e) => setShowDiscounted(e.target.checked)}
          />
        </label>
      )}
      <label>
        Sorted
        <Select defaultValue="DEFAULT" onChange={(e) => setSortMethod(e)}>
          <Select.Option value="DEFAULT">by default</Select.Option>
          <Select.Option value="NEWEST">newest</Select.Option>
          <Select.Option value="HIGHPRICE">price: high-low</Select.Option>
          <Select.Option value="LOWPRICE">price: low-high</Select.Option>
        </Select>
      </label>
    </div>
  );
}

export default ProductsFilter;
