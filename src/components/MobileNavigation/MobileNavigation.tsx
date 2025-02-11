import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../Icon/Icon";
import {
  navigationItems,
  handleNavigation,
} from "../NavigationBase/NavigationBase";
import styles from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={styles.mobileNav}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuButton}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Icon
          id={isOpen ? "close" : "menu"}
          size={24}
          className={styles.menuIcon}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={styles.menuOverlay}
          >
            <nav className={styles.menuNav}>
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.value}
                  onClick={() => {
                    handleNavigation(item.value);
                    setIsOpen(false);
                  }}
                  className={`${styles.menuItem} ${
                    location.pathname === `/${item.value}`
                      ? styles.menuItemActive
                      : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
