import styles from "./StationCard.module.css";

function StationCard({ station }) {
  const services = [
    { name: "Restrooms", icon: "/images/greenToilet.png" },
    { name: "Fuel", icon: "/images/gasBottleGreen.png" },
    { name: "Coffee", icon: "/images/greenCoffeeIcon.png" },
    { name: "ATM", icon: "/images/ATMGreen.png" },
  ];
  return (
    // container for each station card
    <div className={styles.stationCard}>
      {/* name of station */}
      <h2 className={styles.stationName}>{station.name}</h2>

      {/* station address & suburb */}
      <p className={styles.stationAddress}>
        {station.address}, {station.suburb}
      </p>

      {/* description under address */}
      <div className={styles.description}>
        {/* services offered and contact info */}
        <div className={styles.leftSide}>
          <h4 className={styles.title}>Services Offered</h4>
          <div className={styles.services}>
            {/* render the services offered availability as icons using db data*/}
            {services
              .filter((service) =>
                station.servicesOffered.includes(service.name)
              )
              .map((service, index) => (
                <img
                  key={index}
                  src={service.icon}
                  className={styles.serviceIcon}
                />
              ))}
          </div>
          <h4>Contact Store</h4>
          <div className={styles.contactInfo}>
            <img
              src="/images/phoneIconWhite.png"
              alt="Phone Icon"
              className={styles.phoneIcon}
            />
            <span>{station.phone}</span>
          </div>
        </div>

        {/* opening hours */}
        <div className={styles.rightSide}>
          {Object.entries(station.hours).map(
            (
              [day, hours] //object.entries() takes an object and converts into an array of key - value pairs
            ) => (
              <div className={styles.hourRow} key={day}>
                <span className={styles.day}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </span>
                <span className={styles.hours}>{hours}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default StationCard;
