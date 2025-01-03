import styles from "./StationCard.module.css";

function StationCard({ station, index }) {
  return (
    <div className={styles.stationCard}>
      <h2>{station.name}</h2>
      <p>
        {station.address}, {station.suburb}
      </p>
      <div className={styles.description}>
        <div className={styles.leftSide}>
          <h4>Services Offered</h4>
          <p>picture icons here</p>
          <h4>Contact Store</h4>
          <p>{station.phone}</p>
        </div>

        <div className={styles.rightSide}>
          <p>
            Sun: <span>{station.hours.sunday}</span>
          </p>
          <p>
            Mon: <span>{station.hours.monday}</span>
          </p>
          <p>
            Tue: <span>{station.hours.tuesday}</span>
          </p>
          <p>
            Wed: <span>{station.hours.wednesday}</span>
          </p>
          <p>
            Thurs: <span>{station.hours.thursday}</span>
          </p>
          <p>
            Fri: <span>{station.hours.friday}</span>
          </p>
          <p>
            Sat: <span>{station.hours.saturday}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StationCard;
