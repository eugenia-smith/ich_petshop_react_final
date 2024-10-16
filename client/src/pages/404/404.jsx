import styles from "./styles.module.css";
import errorImg from "../../assets/images/404.png";
import { Link } from "react-router-dom";

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
        <Link to="/" className={styles.error_btn}>
          Go Home
        </Link>
      </section>
    </main>
  );
}

export default ErrorPage;
