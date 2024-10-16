import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function CategoryCard({ elem }) {
  return (
    <Link to={"/categories/" + elem.id}>
      <article className={styles.category_item}>
        <picture className={styles.category_img}>
          <img src={"http://localhost:3333/" + elem.image} alt={elem.title} />
        </picture>
        <p className={styles.category_caption}>{elem.title}</p>
      </article>
    </Link>
  );
}

export default CategoryCard;
