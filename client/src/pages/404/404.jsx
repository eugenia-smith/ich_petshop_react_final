import styles from "./styles.module.css";
import errorImg from "../../assets/images/404.png";

function ErrorPage() {
  return (
    <main>
      <section className={styles.error_contents}>
        <picture>
          <img src={errorImg} alt="" />
        </picture>
        <div className={styles.error_description}>
          <h2>Page not Found</h2>
          <p>
            We are sorry, the page you requested could not be found. <br />{" "}
            Please go back to the homepage.
          </p>
        </div>
        <button className={styles.error_btn} type="button">
          Go Home
        </button>
      </section>
    </main>
  );
}

export default ErrorPage;
