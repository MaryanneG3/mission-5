import styles from "./HeaderComponent.module.css"
function HeaderComponent() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerText}>Find a fuel station near you</h1>
    </div>
  )
}

export default HeaderComponent
