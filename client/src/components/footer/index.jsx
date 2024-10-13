import styles from "./styles.module.css";
import instaIcon from "../../assets/icons/instagram_icon.svg";
import whatsUpIcon from "../../assets/icons/whatsapp_icon.svg";
// import footerMap from "../../assets/images/map.png";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <h2 className={styles.footer_heading}>Contact</h2>
      <ul className={styles.footer_contents}>
        <li>
          <p className={styles.footer_contact_heading}>Phone</p>
          <a href="tel:+493091588492" className={styles.footer_contact_info}>
            +49 30 915-88492
          </a>
        </li>
        <li>
          <p className={styles.footer_contact_heading}>Socials</p>
          <div className={styles.footer_social_container}>
            <a href="#">
              <img src={instaIcon} alt="" />
            </a>
            <div>
              <a href="#" className={styles.footer_contact_info}>
                <img src={whatsUpIcon} alt="" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <p className={styles.footer_contact_heading}>Address</p>
          <p className={styles.footer_contact_info}>
            Wallstrasse 9-13, 10179 Berlin, Deutschland
          </p>
        </li>
        <li>
          <p className={styles.footer_contact_heading}>Working Hours</p>
          <p className={styles.footer_contact_info}>24 hours a day</p>
        </li>
        <li></li>
      </ul>
    </footer>
  );
}
export default Footer;
