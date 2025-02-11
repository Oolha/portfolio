import { Icon } from "../Icon/Icon";
import styles from "./SocialLinks.module.css";

interface SocialLink {
  id: string;
  url: string;
  label: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      id: "github",
      url: "https://github.com/Oolha",
      label: "GitHub Profile",
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/olha-sydorchuuk/",
      label: "LinkedIn Profile",
    },
    {
      id: "email",
      url: "mailto:olhaasydorchuk@gmail.com",
      label: "Send email",
    },
  ];

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map(({ id, url, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={label}
        >
          <Icon id={id} size={24} className={styles.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
