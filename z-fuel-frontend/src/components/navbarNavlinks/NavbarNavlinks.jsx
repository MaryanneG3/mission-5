import { useState } from "react";
import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

function NavbarNavlinks() {
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
              to: "#antiques-and-collectables-page",
              label: "Antiques and Collectables",
            },
            { to: "#art-page", label: "Art" },
            { to: "#baby-gear-page", label: "Baby gear" },
            { to: "#books", label: "Books" },
            { to: "#bilding-and-renovation", label: "Building and Renovation" },
            {
              to: "#biz-farm-and-industry",
              label: "Business, Farming and Industry",
            },
            { to: "#clothing-and-fashion-page", label: "Clothing and Fashion" },
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
              to: "#antiques-and-collectables-page",
              label: "Antiques and Collectables",
            },
            { to: "#art-page", label: "Art" },
            { to: "#baby-gear-page", label: "Baby gear" },
            { to: "#books", label: "Books" },
            { to: "#bilding-and-renovation", label: "Building and Renovation" },
            {
              to: "#biz-farm-and-industry",
              label: "Business, Farming and Industry",
            },
            { to: "#clothing-and-fashion-page", label: "Clothing and Fashion" },
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
              to: "#antiques-and-collectables-page",
              label: "Antiques and Collectables",
            },
            { to: "#art-page", label: "Art" },
            { to: "#baby-gear-page", label: "Baby gear" },
            { to: "#books", label: "Books" },
            { to: "#bilding-and-renovation", label: "Building and Renovation" },
            {
              to: "#biz-farm-and-industry",
              label: "Business, Farming and Industry",
            },
            { to: "#clothing-and-fashion-page", label: "Clothing and Fashion" },
          ]}
        />
      </div>

      <div className={styles.rightSection}>
        <NavLink to="#create-account-page" className={styles.navlink}>
          <button className={styles.createAccBtn}>Create Account</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarNavlinks;
