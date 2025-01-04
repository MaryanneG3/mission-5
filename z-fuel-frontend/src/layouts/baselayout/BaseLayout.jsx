import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import styles from "./BaseLayout.module.css";

function BaseLayout({ children }) {
  return (
    <div className={styles.baseLayout}>
      <Header />
      <Navbar />

      <div className={styles.mainsection}>
        <div className={styles.contentArea}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default BaseLayout;
