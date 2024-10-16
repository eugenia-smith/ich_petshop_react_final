import styles from "./styles.module.css";
import imgPlaceholder from "../../assets/images/img_placeholder.png";

function CartItem() {
  return (
    <article className={styles.cart_item}>
      <picture>
        <img
          src={imgPlaceholder}
          alt=""
          style={{ width: "200px", height: "180px" }}
        />
      </picture>
      <div className={styles.cart_item_header}>
        <h4 className={styles.cart_item_heading}>Custom heading</h4>
        <button type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#282828"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#282828"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.count_and_price}>
        <div className={styles.controls_container}>
          <div className={styles.counter_container}>
            <button type="button">
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
            <p>1</p>
            <button type="button">
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
        </div>
        <div className={styles.price_container}>
          <p className={styles.current_price}>$..</p>
          <p className={styles.previuos_price}>$..</p>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
