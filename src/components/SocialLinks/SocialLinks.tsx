import { Icon } from "../Icon/Icon";
import styles from "./SocialLinks.module.css";
import { socialLinks } from "@/config/socialLinks";

const SocialLinks = () => {
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
