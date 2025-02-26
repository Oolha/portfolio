import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import About from "../../components/About/About";
import Tools from "../../components/Tools/Tools";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import styles from "./HomePage.module.css";
import { Layout } from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import CV from "../../components/CV/CV";

interface LocationState {
  isFirstVisit?: boolean;
}

const HomePage = () => {
  const location = useLocation();
  const { sectionId } = useParams();
  const locationState = location.state as LocationState;
  const isFirstVisit = locationState?.isFirstVisit;

  useEffect(() => {
    // Якщо перший візит або немає sectionId, скролимо до верху
    if (isFirstVisit || !sectionId) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Обробка навігації для інших випадків
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Для секції About завжди скролимо до самого верху
        if (sectionId === "about") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        // Для інших секцій використовуємо більш плавний підхід
        const navElement = document.querySelector("nav");
        const navHeight = navElement ? navElement.clientHeight : 0;

        // Використовуємо scrollIntoView з опцією block: "start"
        // та додаємо CSS scroll-margin-top для елементів
        element.style.scrollMarginTop = `${navHeight + 20}px`;
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [sectionId, location.key, isFirstVisit]);
  const sectionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className={styles.main}>
      <Navigation />
      <Layout>
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Tools />
        </motion.section>

        <Projects />
        <Contact />
      </Layout>
      <CV />
      <Footer />
    </main>
  );
};

export default HomePage;
