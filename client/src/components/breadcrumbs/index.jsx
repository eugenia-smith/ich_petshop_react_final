import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Breadcrumbs({ parents, title }) {
  return (
    <div className={styles.breadcrumbs}>
      {parents.map((elem, index) => (
        <Link key={index} to={elem.path}>
          <div>{elem.title}</div>
        </Link>
      ))}
      <div className={styles.current_page}>{title}</div>
    </div>
  );
}

export default Breadcrumbs;
