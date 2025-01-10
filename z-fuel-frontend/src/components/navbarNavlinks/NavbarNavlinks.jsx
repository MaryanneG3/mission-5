import { useState } from "react";
import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

function NavbarNavlinks({ variant }) {
  const [dropdowns, setDropdowns] = useState({
    howToEnjoyZ: false,
    rewardAndPromotion: false,
    location: false,
  });

  const toggleMenu = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const isHomapage = () => {
    if (variant === "homepage") {
      return true;
    }
  };

  return (
    <div className={styles.navbarlinksContainer}>
      <div className={styles.leftSection}>
        <DropdownMenu
          menu="howToEnjoyZ"
          title="How to enjoy Z station"
          icon={faArrowDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            {
              to: "/order-online-landing-page",
              label: "Order online",
            },
            { to: "/share-tank", label: "Share Tank" },
          ]}
        />

        <DropdownMenu
          menu="rewardAndPromotion"
          title="Rewards and Promotions"
          icon={faArrowDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            {
              to: "/pumped",
              label: "Pumped",
            },
            { to: "/airpoints", label: "Airpoints" },
            { to: "/fuel-up", label: "Fuelup" },
            { to: "/promos", label: "Promotions" },
          ]}
        />

        <DropdownMenu
          menu="location"
          title="Location"
          icon={faArrowDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            {
              to: "/find-a-station",
              label: "Find a Station",
            },
            { to: "/price-comparison", label: "Compare Prices" },
          ]}
        />
      </div>

      {isHomapage() && (
        <div className={styles.rightSection}>
          <NavLink to="/create-account" className={styles.navlink}>
            <button className={styles.createAccBtn}>Create Account</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavbarNavlinks;
