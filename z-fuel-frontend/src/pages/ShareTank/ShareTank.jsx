import BaseLayout from "../../layouts/baselayout/BaseLayout";
import Titlebar from "../../common/titlebar/Titlebar";
import styles from "./ShareTank.module.css"

function ShareTank() {
  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="shareTank"
        title="Share Tank"
      />
      <div className={styles.container}>
        <div>
          <img
            className={styles.upperBanner}
            src="/images/sharetank/upperBanner-sharetank.png"
            alt="Upper Banner"
          />
        </div>
        <div>
          <img
            className={styles.imageBar}
            src="/images/sharetank/image-bar-sharetank.png"
            alt="Image Bar"
          />
        </div>
        <div>
          <img
            className={styles.infoBanner}
            src="/images/sharetank/why-use-share-tank.png"
            alt="Why use share tank"
          />
        </div>
        <div>
          <img
            className={styles.bottomBanner}
            src="/images/sharetank/bottom-banner.png"
            alt="Upper Banner"
          />
        </div>
      </div>
    </BaseLayout>
  );
}

export default ShareTank;
