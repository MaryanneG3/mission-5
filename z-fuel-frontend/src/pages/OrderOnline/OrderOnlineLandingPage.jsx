import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./OrderOnline.module.css";
import Titlebar from "../../common/titlebar/Titlebar";

function OrderOnlineLandingPage() {
  const categories = [
    {
      key: 1,
      category: "Hot drinks",
      imgSrc: "../../../public/images/orderOnline/cards/Latte.png",
    },
    {
      key: 2,
      category: "Cold drinks",
      imgSrc: "../../../public/images/orderOnline/cards/Cold Drinks Large.png",
    },
    {
      key: 3,
      category: "Food",
      imgSrc: "../../../public/images/orderOnline/cards/a half eaten pie.png",
    },
    {
      key: 4,
      category: "Make it a Combo",
      imgSrc: "../../../public/images/orderOnline/cards/Combo.png",
    },
  ];

  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="onlineOrder"
        title="Crave it. Order it. Enjoy it."
      />

      <div className={styles.informationContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.titles}>Fuel up more than just your car! </h2>
          <blockquote className={styles.orderOnlineServiceDetails}>
            <p>
              Our gas stations offer a delicious range of freshly prepared food
              and snacks, perfect for busy families and people on the go.{" "}
            </p>
            <p>
              Whether you’re grabbing breakfast, a quick lunch, or a treat for
              the road, our convenient, high-quality options ensure you stay
              energized and satisfied wherever your journey takes you.
            </p>
            <p>Stop in today and enjoy food that’s ready when you are!</p>
          </blockquote>
          <button className={styles.findStationBtn}>
            Find your nearest Z station
          </button>
        </div>

        <div className={styles.rightSection}>
          <img
            src="../../../public/images/orderOnline/ZWebsite Food Image.png"
            className={styles.orderOnlineDefaultImg}
          />
        </div>
      </div>

      <div className={styles.orderContainer}>
        <h2 className={styles.titles}>
          Pre-Order Online – Skip the Queue and Save Time!
        </h2>
        <div className={styles.categoriesContainer}>
          {categories.map((category) => (
            <div key={category.key} className={styles.categoryCard}>
              <div className={styles.imageControlContainer}>
                <img src={category.imgSrc} className={styles.categoryImage} />
              </div>
              <h3>{category.category}</h3>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

export default OrderOnlineLandingPage;
