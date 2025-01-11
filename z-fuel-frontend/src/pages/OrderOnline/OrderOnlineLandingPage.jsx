import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./OrderOnline.module.css";
import Titlebar from "../../common/titlebar/Titlebar";
import { useEffect, useState } from "react";

function OrderOnlineLandingPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/api/products/all-products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/api/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchAllProducts();
    fetchCategories();
  }, []);

  let filteredProducts = [];

  if (selectedCategory !== null) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  } else {
    filteredProducts = [];
  }

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
              and snacks, perfect for busy families and people on the go.
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
            <div
              key={category.name}
              className={`${styles.categoryCard} ${
                selectedCategory === category.name ? styles.activeCategory : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className={styles.imageControlContainer}>
                <img
                  src={`../../../public/images/orderOnline/cards/${category.imgSrc}`}
                  className={styles.categoryImage}
                />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className={styles.productsContainer}>
          <h3 className={styles.titles}>
            Select {selectedCategory.toLowerCase()}:
          </h3>
          <div className={styles.productsList}>
            {filteredProducts.map((product) => (
              <div key={product.name} className={styles.productCard}>
                <div className={styles.imageControlContainer}>
                  <img
                    src={`../../../public/images/orderOnline/${product.imageSource}`}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <h4>{product.name}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </BaseLayout>
  );
}

export default OrderOnlineLandingPage;

// const categories = [
//   {
//     key: 1,
//     category: "Hot drinks",
//     imgSrc: "../../../public/images/orderOnline/cards/Latte.png",
//   },
//   {
//     key: 2,
//     category: "Cold drinks",
//     imgSrc: "../../../public/images/orderOnline/cards/Cold Drinks Large.png",
//   },
//   {
//     key: 3,
//     category: "Food",
//     imgSrc: "../../../public/images/orderOnline/cards/a half eaten pie.png",
//   },
//   {
//     key: 4,
//     category: "Make it a Combo",
//     imgSrc: "../../../public/images/orderOnline/cards/Combo.png",
//   },
// ];
