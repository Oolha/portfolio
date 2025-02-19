import { useEffect, useState } from "react";
import {
  SpeedDial,
  SpeedDialAction,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { Visibility, Download } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "./CV.module.css";

const CV = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const isMobile = useMediaQuery("(max-width:768px)");
  const isLandscape = useMediaQuery(
    "(orientation: landscape) and (max-height: 480px)"
  );

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        if (open) setOpen(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile, open]);

  const fileId = "1BwD0SfliaKhMQaFFqeUTKbJswze5kBFd";

  const handleViewCV = () => {
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    window.open(viewUrl, "_blank");
    setOpen(false);
  };

  const handleDownloadCV = () => {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, "_blank");
    setSnackbarMessage("CV download starts...");
    setOpenSnackbar(true);
    setOpen(false);
  };

  const actions = [
    { icon: <Visibility />, name: "View CV", onClick: handleViewCV },
    { icon: <Download />, name: "Download CV", onClick: handleDownloadCV },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="CV SpeedDial"
        className={styles.speedDial}
        icon={
          <motion.div
            className={styles.iconWrapper}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/svg/cv-icon.svg"
              alt="CV Options"
              className={styles.icon}
              loading="lazy"
            />
          </motion.div>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction={isLandscape ? "left" : "up"}
        FabProps={{
          "aria-label": "Open CV options",
          title: "Options CV",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            tooltipOpen={!isMobile}
            FabProps={{
              className: styles.actionButton,
              "aria-label": action.name,
            }}
          />
        ))}
      </SpeedDial>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          className={styles.alert}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CV;
