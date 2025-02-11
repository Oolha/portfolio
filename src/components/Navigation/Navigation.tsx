import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../../config/navigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (value: string) => {
    navigate(`/${value}`);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.buttonGroup}>
        {navigationItems.map((item) => (
          <button
            key={item.value}
            onClick={() => handleClick(item.value)}
            className={`${styles.button} ${
              location.pathname === `/${item.value}` ? styles.activeButton : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
