import styles from "./StationCard.module.css";

function StationCard({ station }) {
  return (
    <div className={styles.stationCard}>
      <h2 className={styles.stationName}>{station.name}</h2>
      <p className={styles.stationAddress}>
        {station.address}, {station.suburb}
      </p>
      <div className={styles.description}>
        <div className={styles.leftSide}>
          <h4>Services Offered</h4>
          <p>picture icons here</p>
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

        <div className={styles.rightSide}>
          {Object.entries(station.hours).map(([day, hours]) => ( //Object.entries() takes an object and converts into an array of key-value pairs
            <div className={styles.hourRow} key={day}>
              <span className={styles.day}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </span>
              <span className={styles.hours}>{hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StationCard;
