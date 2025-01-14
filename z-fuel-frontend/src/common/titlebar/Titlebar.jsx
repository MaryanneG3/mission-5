import styles from "./Titlebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Titlebar({ variant, backgroundImage, title }) {
  let backgroundClass;

  const isDefault = () => {
    if (variant === "default") {
      return true;
    }
  };

  const isFindStation = () => {
    if (variant === "findStation") {
      return true;
    }
  };

  const isShareTank = () => {
    if (variant === "shareTank") {
      return true;
    }
  };

  // Use startUp image for create account and signin title bars

  switch (backgroundImage) {
    case "welcomeToZ":
      backgroundClass = styles.welcomeToZ;
      break;

    case "find-a-station":
      backgroundClass = styles.findStation;
      break;

    case "createAccSignIn":
      backgroundClass = styles.createAccSignIn;
      break;

    case "shareTank":
      backgroundClass = styles.shareTank;
      break;

    case "onlineOrder":
      backgroundClass = styles.onlineOrder;
      break;

    case "priceComparison":
      backgroundClass = styles.priceComparison;
      break;

    case "paymentCards":
      backgroundClass = styles.paymentCards;
      break;

    default:
      backgroundClass = styles.welcomeToZ;
      break;
  }

  return (
    <>
      {isDefault() && (
        <div className={styles.backgroundColor}>
          <div className={`${styles.titlebar} ${backgroundClass}`}>
            <h1>{title}</h1>
          </div>
        </div>
      )}

      {isFindStation() && (
        <div className={styles.backgroundColor}>
          <div className={`${styles.titlebar} ${backgroundClass}`}>
            <div className={styles.leftSection}>
              <h2>{title}</h2>

              <div className={styles.findStatBtn}>
                <NavLink
                  to="/find-a-station"
                  className={styles.findStationLink}
                >
                  <p>Find your Closest Z </p>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className={styles.icon}
                  />
                </NavLink>
              </div>
            </div>
            <div className={styles.rightSection}>
              {/* <img src="../../../public/images/icons/zPurpleVector.png" /> */}
              {/* <img src="../../../public/images/icons/zPurpleVector.png" /> */}
            </div>
          </div>
        </div>
      )}

      {isShareTank() && (
        <div className={styles.backgroundColor}>
          <div className={`${styles.titlebar} ${backgroundClass}`}>
            <h1>{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Titlebar;

{
  /* Title bar usage demonstration */
  /* <br />

<Titlebar
  variant="default"
  backgroundImage="createAccSignIn"
  title="Create Account"
/>

<br />

<Titlebar
  variant="default"
  backgroundImage="priceComparison"
  title="Fuel your Savings - Compare prices now."
/>

<br />

<Titlebar
  variant="default"
  backgroundImage="shareTank"
  title="Share Tank"
/>

<br />

<Titlebar
  variant="default"
  backgroundImage="onlineOrder"
  title="Crave it. Order it. Enjoy it."
/>

<br />

<Titlebar
  variant="default"
  backgroundImage="paymentCards"
  title="My Payment Cards"
/> */
}
