import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import styles from "./BaseLayout.module.css";

function BaseLayout({ children, variant }) {
  return (
    <div className={styles.baseLayout}>
      {/* hompage or default */}
      <div className={styles.navbar}>
        <Header />
        <Navbar variant={variant} />
      </div>

      <div className={styles.mainsection}>
        <div className={styles.contentArea}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default BaseLayout;
