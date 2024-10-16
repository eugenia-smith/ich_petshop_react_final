import styles from "./styles.module.css";
import imgPlaceholder from "../../assets/images/img_placeholder.png";
import { fetchProduct } from "../../helpers/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

import Breadcrumbs from "../../components/breadcrumbs";

function Product() {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({ category: {} });
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function sendToCart() {
    const item = {
      id: product.id,
      image: `http://localhost:3333/${product.image}`,
      title: product.title,
      price: product.discont_price ? product.price : product.discont_price,
      discont_price: product.discont_price
        ? product.discont_price
        : product.price,
      quantity: quantity, // По умолчанию добавляем 1 товар
    };

    dispatch(addToCart(item));
  }

  useEffect(() => {
    fetchProduct(setProduct, setCategory, productId);
  }, [productId]);

  const hasDiscount =
    product.discont_price !== null && product.discont_price < product.price;

  return (
    <main className={styles.main_container}>
      <Breadcrumbs
        parents={[
          { title: "Main page", path: "/" },
          { title: "Categories", path: "/categories" },
          {
            title: category.category.title,
            path: "/categories/" + category.category.id,
          },
        ]}
        title={product.title}
      />

      <section className={styles.product_info}>
        <div className={styles.product_photo_container}>
          <img
            className={styles.product_img_placeholder}
            src={imgPlaceholder}
            alt=""
          />
          <img
            className={styles.product_img_placeholder}
            src={imgPlaceholder}
            alt=""
          />
          <img
            className={styles.product_img_placeholder}
            src={imgPlaceholder}
            alt=""
          />
          <img
            className={styles.product_main_img}
            src={"http://localhost:3333/" + product.image}
            alt=""
          />
        </div>

        <div className={styles.product_order}>
          <h3>{product.title}</h3>
          <div className={styles.price_container}>
            {hasDiscount ? (
              <>
                <p className={styles.current_price}>${product.discont_price}</p>
                <p className={styles.previous_price}>${product.price}</p>
              </>
            ) : (
              <p className={styles.current_price}>${product.price}</p> // Если нет скидки, просто рендерим цену
            )}
            {hasDiscount && (
              <p className={styles.discount_sum}>
                -
                {Math.floor(
                  100 - (product.discont_price * 100) / product.price
                )}
                %
              </p>
            )}
          </div>
          <div className={styles.controls_container}>
            <div className={styles.counter_container}>
              <button
                type="button"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#8B8B8B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <p>{quantity}</p>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#8B8B8B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5V19"
                    stroke="#8B8B8B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <Button type="primary" className="custom-btn" onClick={sendToCart}>
              Add to cart
            </Button>
          </div>
          <div className={styles.product_description}>
            <h5>Description</h5>
            <p className={styles.product_description}>{product.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
