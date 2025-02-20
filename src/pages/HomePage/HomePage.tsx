import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || "about";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
          id="about"
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        <motion.section
          id="tools"
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
