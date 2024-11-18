import Navigation from "./Navigation";
import { Navigate, useOutlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  const outlet = useOutlet();

  return (
    <div className={styles.wrapper}>
      <Navigation />
      {outlet ?? <Navigate to="dashboard" />}
    </div>
  );
}
