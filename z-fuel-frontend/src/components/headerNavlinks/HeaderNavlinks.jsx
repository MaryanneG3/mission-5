import { useState } from "react";
import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faCircleArrowRight,
  faBars, // Hamburger icon
  faXmark, // Close icon
} from "@fortawesome/free-solid-svg-icons";

const HeaderNavlinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.headerlinksContainer}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerContainer}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className={styles.hamburgerIcon}
          onClick={toggleMenu}
        />
      </div>

      {/* NavLinks Container - This will show or hide based on the state */}
      <div
        className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
      >
        <NavLink to="#z-app-page" className={styles.navlink}>
          <p>Z App</p>
        </NavLink>

        <NavLink to="#about-z-page" className={styles.navlink}>
          <p>About Z</p>
        </NavLink>

        <NavLink to="/confirm-order" className={styles.navlink}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
        </NavLink>

        <NavLink to="#search-page" className={styles.navlink}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </NavLink>

        <button className={styles.loginBtn}>
          <p>Login</p>
          <FontAwesomeIcon icon={faCircleArrowRight} className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default HeaderNavlinks;
