import styles from "./styles.module.css";
import mainLogo from "../../assets/icons/main_logo_icon.svg";
import basketIcon from "../../assets/icons/basket_icon.svg";

function Header() {
  return (
    <header className={styles.main_header}>
      <picture className={styles.main_logo}>
        <img src={mainLogo} alt="" />
      </picture>
      <nav className={styles.main_nav_container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a href="">Main page</a>
          </li>
          <li className={styles.nav_item}>
            <a href="">Categories</a>
          </li>
          <li className={styles.nav_item}>
            <a href="">All products</a>
          </li>
          <li className={styles.nav_item}>
            <a href="">All sales</a>
          </li>
        </ul>
      </nav>
      <div className={styles.main_basket_link}>
        <img src={basketIcon} alt="" />
      </div>
    </header>
  );
}
export default Header;
