import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CartItem from "../../components/cartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch;

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <main>
      <section className={styles.cart_container}>
        {cartItems.length === 0 ? (
          <h2>Your Cart is empty</h2>
        ) : (
          <>
            <div className={styles.cart_header}>
              <h2 className={styles.cart_heading}>Shopping Cart</h2>
              <Link to="/products">Back to store</Link>
            </div>

            <div className={styles.order_details}>
              <ul className={styles.order_items}>
                {cartItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <CartItem item={item} />
                    </li>
                  );
                })}
              </ul>
              <div className={styles.order_form_container}>
                <h3 className={styles.order_form_heading}>Order details</h3>
                <p>... items</p>
                <div className={styles.total_sum}>
                  <p>Total</p>
                  <p className={styles.sum}>$</p>
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
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;
