// import styles from "../navlinks/NavLinks.module.css";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCartShopping,
//   faMagnifyingGlass,
//   faCircleArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

// const HeaderNavlinks = () => {
//   return (
//     <div className={styles.headerlinksContainer}>
//       <NavLink to="#z-app-page" className={styles.navlink}>
//         <p>Z App</p>
//       </NavLink>

//       <NavLink to="#about-z-page" className={styles.navlink}>
//         <p>About Z</p>
//       </NavLink>

//       <NavLink to="#cart-page" className={styles.navlink}>
//         <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
//       </NavLink>

//       <NavLink to="#search-page" className={styles.navlink}>
//         <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
//       </NavLink>

//       {/* when mag glass icon is clicked - pop up text area for user to enter search text??? */}

//       {/* <div className={styles.searchBarContainer}>
//         <label>Search</label>
//         <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />

//         <input type="text" placeholder="Enter search item here" />
//       </div> */}

//       <button className={styles.loginBtn}>
//         <p>Login</p>
//         <FontAwesomeIcon icon={faCircleArrowRight} className={styles.icon} />
//       </button>
//     </div>
//   );
// };

// export default HeaderNavlinks;
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

        <NavLink to="#cart-page" className={styles.navlink}>
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
