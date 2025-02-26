import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../../config/projects";
import styles from "./Projects.module.css";
import AnimatedEmoji from "../Emoji/Emoji";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Projects
      </Typography>

      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className={styles.card}>
              <Box className={styles.cardInner}>
                <CardMedia
                  component="img"
                  height="400"
                  loading="lazy"
                  object-fit="fill"
                  image={project.image}
                  alt={project.title}
                  className={styles.cardMedia}
                />

                <CardContent className={styles.cardContent}>
                  <Typography variant="h4" className={styles.projectTitle}>
                    <AnimatedEmoji
                      symbol="⚡"
                      label="lightning"
                      size={32}
                      animation="pulse"
                    />
                    {project.title}
                  </Typography>

                  <Typography className={styles.description}>
                    {project.description}
                  </Typography>

                  <Box className={styles.techStack}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        className={styles.techChip}
                      />
                    ))}
                  </Box>

                  <CardActions className={styles.actions}>
                    <Button
                      startIcon={<BiLinkExternal />}
                      href={project.liveLink}
                      target="_blank"
                      className={styles.button}
                    >
                      Live Demo
                    </Button>
                    <Button
                      startIcon={<FaGithub />}
                      href={project.githubLink}
                      target="_blank"
                      className={styles.button}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
