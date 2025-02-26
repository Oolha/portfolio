import { useLocation } from "react-router-dom";
import {
  navigationItems,
  useCustomNavigation,
} from "../NavigationBase/NavigationBase";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const { handleNavigation } = useCustomNavigation();

  return (
    <>
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
        <div className={styles.buttonGroup}>
          {navigationItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavigation(item.value)}
              className={`${styles.button} ${
                location.pathname === `/${item.value}`
                  ? styles.activeButton
                  : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
