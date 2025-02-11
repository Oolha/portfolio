import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import About from "../../components/About/About";
import Tools from "../../components/Tools/Tools";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || "about";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className={styles.container}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation />

      <motion.section
        id="about"
        className={styles.section}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.25], [1, 0.8]),
        }}
      >
        <About />
      </motion.section>

      <motion.section
        id="tools"
        className={styles.section}
        style={{
          opacity: useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
          scale: useTransform(scrollYProgress, [0.25, 0.5], [0.8, 1]),
        }}
      >
        <Tools />
      </motion.section>

      <motion.section
        id="projects"
        className={styles.section}
        style={{
          opacity: useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
          scale: useTransform(scrollYProgress, [0.5, 0.75], [0.8, 1]),
        }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        className={styles.section}
        style={{
          opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]),
          scale: useTransform(scrollYProgress, [0.75, 1], [0.8, 1]),
        }}
      >
        <Contact />
      </motion.section>
    </main>
  );
};

export default HomePage;
