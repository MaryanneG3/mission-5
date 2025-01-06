import Titlebar from "../../common/titlebar/Titlebar";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./Homepage.module.css";

import homepageImage from "../../../public/images/homepage/Homepage-family-photo.png";

function Homepage() {
  const serviceLinks = [
    {
      serviceTitle: "Sharetank",
      serviceDescription:
        "Buy fuel and share with up to 5 friends and family with Sharetank",
      btnTitle: "Sharetank",
      btnLink: "/sharetank",
      imgSrc: "../../../public/images/homepage/share-tank.png",
    },
    {
      serviceTitle: "Price comparison",
      serviceDescription: "Compare fuel prices with nearby stations ",
      btnTitle: "Price comparison",
      btnLink: "/price-comparison",
      imgSrc: "../../../public/images/homepage/price-comparison.png",
    },
    {
      serviceTitle: "Order food online",
      serviceDescription:
        "Order food and drinks via the app and pick up at the station ",
      btnTitle: "Order food",
      btnLink: "/order-food-online",
      imgSrc: "../../../public/images/homepage/order-online.png",
    },
  ];

  return (
    <BaseLayout variant="homepage">
      <Titlebar
        variant="default"
        backgroundImage="welcomeToZ"
        title="Welcome to Z"
      />

      <div className={styles.homepageImageContainer}>
        <img
          className={styles.homepageImage}
          src={homepageImage}
          alt="family at z-fuel station"
        />
      </div>

      <Titlebar
        variant="findStation"
        backgroundImage="find-a-station"
        title="Find a Z Station"
      />
      <main className={styles.mainContainer}>
        {serviceLinks.map((service, index) => (
          <div
            key={index}
            className={`${styles.ContentContainer} ${
              index % 2 === 1 ? styles.ContentContainerFlipped : ""
            }`}
          >
            <div
              className={`${styles.serviceDetailsContainer} ${
                index % 2 === 1 ? styles.serviceDetailsContainerFlipped : ""
              }`}
            >
              <div className={styles.serviceDetails}>
                <h2>{service.serviceTitle}</h2>
                <p>{service.serviceDescription}</p>
                <button>{service.btnTitle}</button>
              </div>
            </div>

            <div className={styles.serviceImageContainer}>
              <img className={styles.serviceImg} src={service.imgSrc} />
            </div>
          </div>
        ))}
      </main>
    </BaseLayout>
  );
  s;
}

export default Homepage;
