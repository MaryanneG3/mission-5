import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftSide}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <a className={styles.navButtonLeft}>For personal</a>
      </div>
      <div className={styles.rightSide}>
        <ul className={styles.navLinks}>
          <li>Z App</li>
          <li>About Z</li>
        </ul>
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <img src="/images/shoppingCartIcon.png" alt="Cart" />
          </button>
          <button className={styles.iconButton}>
            <img src="/images/searchIcon.png" alt="Search" />
          </button>
        </div>
        <a className={styles.navButtonRight}>
          Login <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
