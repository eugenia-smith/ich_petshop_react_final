import styles from "./styles.module.css";

function SaleCard({ elem }) {
  return (
    <article className={styles.sale_item}>
      <p className={styles.discount_sum}>
        {Math.floor(100 - (elem.discont_price * 100) / elem.price)}%
      </p>
      <picture className={styles.sale_item_image}>
        <img src={"http://localhost:3333/" + elem.image} alt="" />
      </picture>
      <div className={styles.card_info}>
        <p className={styles.sale_item_description}>{elem.title}</p>
        <div className={styles.price_container}>
          <p className={styles.actual_price}>${elem.discont_price}</p>
          <p className={styles.previous_price}>${elem.price}</p>
        </div>
      </div>
    </article>
  );
}

export default SaleCard;
