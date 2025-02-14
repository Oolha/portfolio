import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={styles.title}
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Let's Connect
      </motion.h2>

      <motion.div>
        <motion.a
          href="mailto:olhaasydorchuk@gmail.com"
          className={styles.link}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className={styles.contactItem}
            whileHover={{ scale: 1.02 }}
          >
            <FiMail className={styles.icon} />
            <span className={styles.linkText}>olhaasydorchuk@gmail.com</span>
          </motion.div>
        </motion.a>

        <motion.a
          href="https://wa.me/+48690938757"
          className={styles.link}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className={styles.contactItem}
            whileHover={{ scale: 1.02 }}
          >
            <FaWhatsapp className={styles.icon} />
            <span className={styles.linkText}>WhatsApp</span>
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
