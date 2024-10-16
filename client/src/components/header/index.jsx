import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsCount } from "../../redux/slices/cartSlice";

import styles from "./styles.module.css";
import mainLogo from "../../assets/icons/main_logo_icon.svg";
import basketIcon from "../../assets/icons/basket_icon.svg";

function Header() {
  const itemsCount = useSelector(selectItemsCount);

  return (
    <header className={styles.main_header}>
      <picture className={styles.main_logo}>
        <Link to="/">
          <img src={mainLogo} alt="" />
        </Link>
      </picture>
      <nav className={styles.main_nav_container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link to="/">Main page</Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/categories">Categories</Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/products">All products</Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/sales">All sales</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.main_basket_link}>
        <Link to="/cart">
          <img src={basketIcon} alt="" />
          {itemsCount > 0 && (
            <span className={styles.items_count}>{itemsCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
export default Header;
