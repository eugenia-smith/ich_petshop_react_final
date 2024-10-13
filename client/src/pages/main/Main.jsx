import styles from "./styles.module.css";

function Main() {
  return (
    <main className={styles.main_container}>
      <section className={styles.main_banner}>
        <p className={styles.main_slogan}>
          Amazing Discounts <br /> on Pets Products!
        </p>
        <a href="#" className={styles.main_cta_btn}>
          Check out
        </a>
      </section>
    </main>
  );
}

export default Main;
