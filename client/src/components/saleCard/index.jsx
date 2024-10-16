import styles from "./styles.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function SaleCard({ elem }) {
  const dispatch = useDispatch();

  function sendToCart() {
    const item = {
      id: elem.id,
      image: `http://localhost:3333/${elem.image}`,
      title: elem.title,
      price: elem.discont_price ? elem.price : elem.discont_price,
      discont_price: elem.discont_price ? elem.discont_price : elem.price,
      quantity: 1, // По умолчанию добавляем 1 товар
    };

    dispatch(addToCart(item));
  }

  const hasDiscount =
    elem.discont_price !== null && elem.discont_price < elem.price;

  return (
    <Link to={"/products/" + elem.id}>
      <article className={styles.sale_item}>
        {hasDiscount && (
          <p className={styles.discount_sum}>
            {Math.floor(100 - (elem.discont_price * 100) / elem.price)}%
          </p>
        )}

        <picture className={styles.sale_item_image}>
          <img src={"http://localhost:3333/" + elem.image} alt={elem.title} />
        </picture>
        <div className={styles.card_info}>
          <p className={styles.sale_item_description}>{elem.title}</p>
          <div className={styles.price_container}>
            {hasDiscount ? (
              <>
                <p className={styles.actual_price}>${elem.discont_price}</p>
                <p className={styles.previous_price}>${elem.price}</p>
              </>
            ) : (
              <p className={styles.actual_price}>${elem.price}</p> // Если нет скидки, просто рендерим цену
            )}
          </div>
        </div>

        <Button
          onClick={sendToCart}
          type="primary"
          className={styles.add_to_cart_button}
        >
          Add to cart
        </Button>
      </article>
    </Link>
  );
}

export default SaleCard;
