import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <button className={styles.contactButton}>
        Contact Us
        <img className={styles.contactIcon} src="/images/arrowPurple.png" />
      </button>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Z logo"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4 className={styles.heading}>Products and services</h4>
            <ul>
              <li>At the station</li>
              <li>Z app</li>
              <li>Rewards and promotions</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>For businesses</h4>
            <ul>
              <li>Z Business fuel card</li>
              <li>Fuels and services</li>
              <li>Business tips and stories</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>About Z</h4>
            <ul>
              <li>Our story</li>
              <li>Our people</li>
              <li>What we stand for</li>
              <li>Sustainability</li>
              <li>News</li>
              <li>Careers at Z</li>
              <li>Corporate Centre</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  ); // placeholder
}

export default Footer;
