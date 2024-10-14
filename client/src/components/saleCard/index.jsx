import styles from "./styles.module.css";

function SaleCard({ elem }) {
  const hasDiscount =
    elem.discont_price !== null && elem.discont_price < elem.price;

  return (
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
    </article>
  );
}

export default SaleCard;
