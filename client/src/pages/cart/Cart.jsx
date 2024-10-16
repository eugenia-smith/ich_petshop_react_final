import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CartItem from "../../components/cartItem";

function Cart() {
  return (
    <main>
      {/* <section>
        <h2>Your cart is empty</h2>
      </section> */}

      <section className={styles.cart_container}>
        <div className={styles.cart_header}>
          <h2 className={styles.cart_heading}>Shopping Cart</h2>
          <Link to="/products">Back to store</Link>
        </div>

        <div className={styles.order_details}>
          <ul className={styles.order_items}>
            <li>
              <CartItem />
            </li>
          </ul>
          <div className={styles.order_form_container}>
            <h3>Order details</h3>
            <p>... items</p>
            <div className={styles.total_sum}>
              <p>Total</p>
              <p className={styles.sum}></p>
            </div>
            <form className={styles.order_form} action="">
              <input type="text" name="username" id="" placeholder="Name" />
              <input
                type="tel"
                name="telephone"
                id=""
                placeholder="Phone number"
              />
              <input type="email" name="email" id="" placeholder="Email" />
              <input type="submit" value="Order" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
