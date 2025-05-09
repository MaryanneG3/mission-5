import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./OrderOnline.module.css";
import Titlebar from "../../common/titlebar/Titlebar";
import { useEffect, useState } from "react";

function OrderOnlineLandingPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/api/products/all-products"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setError("Failed to load products. Please try again later.");
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/api/products/categories"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Categories: ", data);

        // Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data && typeof data === "object" && data.error) {
          throw new Error(data.error);
        } else {
          throw new Error("Invalid categories data format");
        }
      } catch (error) {
        console.error("Error fetching categories: ", error);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
    fetchCategories();
  }, []);

  let filteredProducts =
    selectedCategory !== null
      ? products.filter((product) => product.category === selectedCategory)
      : [];

  if (loading) {
    return (
      <BaseLayout variant="default">
        <Titlebar
          variant="default"
          backgroundImage="onlineOrder"
          title="Crave it. Order it. Enjoy it."
        />
        <div className={styles.loadingContainer}>
          <p>Loading menu options...</p>
        </div>
      </BaseLayout>
    );
  }

  if (error) {
    return (
      <BaseLayout variant="default">
        <Titlebar
          variant="default"
          backgroundImage="onlineOrder"
          title="Crave it. Order it. Enjoy it."
        />
        <div className={styles.errorContainer}>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.findStationBtn}
          >
            Try Again
          </button>
        </div>
      </BaseLayout>
    );
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
              Whether you're grabbing breakfast, a quick lunch, or a treat for
              the road, our convenient, high-quality options ensure you stay
              energized and satisfied wherever your journey takes you.
            </p>
            <p>Stop in today and enjoy food that's ready when you are!</p>
          </blockquote>
          <button className={styles.findStationBtn}>
            Find your nearest Z station
          </button>
        </div>

        <div className={styles.rightSection}>
          <img
            src="/images/orderOnline/ZWebsite Food Image.png"
            alt="Food selection"
            className={styles.orderOnlineDefaultImg}
          />
        </div>
      </div>

      <div className={styles.orderContainer}>
        <h2 className={styles.titles}>
          Pre-Order Online – Skip the Queue and Save Time!
        </h2>
        {categories.length > 0 ? (
          <div className={styles.categoriesContainer}>
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${styles.categoryCard} ${
                  selectedCategory === category.name
                    ? styles.activeCategory
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={styles.imageControlContainer}>
                  <img
                    src={`/images/orderOnline/cards/${category.imgSrc}`}
                    alt={category.name}
                    className={styles.categoryImage}
                  />
                </div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No menu categories available. Please check back later.</p>
        )}
      </div>

      {selectedCategory && filteredProducts.length > 0 ? (
        <div className={styles.productsContainer}>
          <h3 className={styles.titles}>
            Select {selectedCategory.toLowerCase()}:
          </h3>
          <div className={styles.productsList}>
            {filteredProducts.map((product) => (
              <div key={product.name} className={styles.productCard}>
                <div className={styles.imageControlContainer}>
                  <img
                    src={`/images/orderOnline/${product.imageSource}`}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <h4>{product.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : selectedCategory ? (
        <div className={styles.productsContainer}>
          <p>No products available in this category.</p>
        </div>
      ) : null}
    </BaseLayout>
  );
}

export default OrderOnlineLandingPage;
