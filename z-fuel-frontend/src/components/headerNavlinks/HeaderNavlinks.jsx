import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const HeaderNavlinks = () => {
  return (
    <div className={styles.headerlinksContainer}>
      <NavLink to="#z-app-page" className={styles.navlink}>
        <p>Z App</p>
      </NavLink>

      <NavLink to="#about-z-page" className={styles.navlink}>
        <p>About Z</p>
      </NavLink>

      <NavLink to="#cart-page" className={styles.navlink}>
        <img
          src="/images/icons/shoppingCartIcon.png"
          alt="Cart"
          width={"15px"}
        />
      </NavLink>

      <NavLink to="#search-page" className={styles.navlink}>
        <img src="/images/icons/searchIcon.png" alt="Search" width={"15px"}/>
      </NavLink>

      {/* when mag glass icon is clicked - pop up text area for user to enter search text??? */}

      {/* <div className={styles.searchBarContainer}>
        <label>Search</label>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />

        <input type="text" placeholder="Enter search item here" />
      </div> */}

      <button className={styles.loginBtn}>
        <p>Login</p>
        <FontAwesomeIcon icon={faCircleArrowRight} className={styles.icon} />
      </button>
    </div>
  );
};

export default HeaderNavlinks;
