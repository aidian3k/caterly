import NavigationLink from "./NavigationLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationTitle}>
        <h1>Caterly</h1>
      </div>
      <div className={styles.navigationMenu}>
        <NavigationLink label="Strona główna" path="dashboard" />
        <NavigationLink label="Lista posiłków" path="meals" />
        <NavigationLink label="Koszyk" path="cart" />
      </div>
    </div>
  );
}
