import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";
import CartItem from "../../components/cartItem";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsCount, selectItemsSum } from "../../redux/slices/cartSlice";
import { useForm } from "react-hook-form";
import axios from "axios";

import { clearCart } from "../../redux/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemsCount = useSelector(selectItemsCount);
  const itemsSum = useSelector(selectItemsSum);

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitData(data) {
    const sendData = {
      form: data,
      cart: cartItems,
    };
    console.log("Sending data");
    console.log(sendData);
    try {
      const response = await axios.post(
        "http://localhost:3333/order/send",
        sendData
      );
      console.log(response.data);

      if (response.data.status === "OK") {
        console.log("Data sent!");
        showModal();
        dispatch(clearCart());
        reset();
      }
    } catch (error) {
      console.error("Failed to send", error);
    }
  }

  return (
    <main>
      <section className={styles.cart_container}>
        <div className={styles.cart_header}>
          <h2 className={styles.cart_heading}>Shopping Cart</h2>
          <Link to="/products">Back to store</Link>
        </div>
        {cartItems.length === 0 ? (
          <section className={styles.empty_container}>
            <p className={styles.empty_text}>
              Looks like you your basket is currently empty.
            </p>
            <Link to="/products" className={styles.empty_btn}>
              Continue Shopping
            </Link>
          </section>
        ) : (
          <>
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
                <p>{itemsCount} items</p>
                <div className={styles.total_sum}>
                  <p>Total</p>
                  <p className={styles.sum}>${itemsSum}</p>
                </div>

                <form
                  className={styles.order_form}
                  onSubmit={handleSubmit(submitData)}
                >
                  <input
                    type="text"
                    name="username"
                    id=""
                    placeholder="Name"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <p className={styles.error}>The field cannot be empty!</p>
                  )}

                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Phone number"
                    {...register("telephone", {
                      required: true,
                      pattern:
                        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
                    })}
                  />
                  {errors.username && (
                    <p className={styles.error}>Invalid format!</p>
                  )}

                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && (
                    <p className={styles.error}>Check your email!</p>
                  )}

                  <input type="submit" value="Order" />
                </form>
              </div>
            </div>
          </>
        )}
      </section>
      <>
        <Modal
          title="Congratulations"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            Your order has been successfully placed on the website. A manager
            will contact you shortly to confirm your order.
          </p>
        </Modal>
      </>
    </main>
  );
}

export default Cart;
