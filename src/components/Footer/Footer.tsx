import { Box, Container, Typography } from "@mui/material";
import SocialLinks from "../SocialLinks/SocialLinks";
import AnimatedEmoji from "../Emoji/Emoji";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className={styles.footer}>
      <Container
        sx={{
          padding: {
            xs: "0 32px",
            lg: "0 80px",
          },
        }}
        maxWidth={false}
      >
        <Box className={styles.content}>
          <Box className={styles.topSection}>
            <Typography variant="h6" className={styles.logo}>
              <AnimatedEmoji symbol="❣️" size={24} animation="bounce" />
              Olha Sydorchuk
            </Typography>

            <SocialLinks />
          </Box>

          <Box className={styles.bottomSection}>
            <Typography className={styles.copyright}>
              © {currentYear} All rights reserved
            </Typography>
            <Typography className={styles.quote}>
              Made with{" "}
              <AnimatedEmoji symbol="💜" size={16} animation="pulse" />
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
