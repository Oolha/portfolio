import AnimatedEmoji from "../Emoji/Emoji";
import SocialLinks from "../SocialLinks/SocialLinks";
import css from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={css.aboutContainer}>
      <div className={css.introText}>
        <p className={css.text}>
          Hi there!
          <AnimatedEmoji symbol="👋" size={40} animation="wave" />
        </p>
        <h1 className={css.titleName}>
          I'm <span className={css.name}>Olha Sydorchuk</span>
        </h1>
      </div>
      <p className={css.descriptionText}>
        <span className={css.sftEng}>Software Engineer </span> with experience
        in building web applications from scratch using React, TypeScript,
        Node.js, and modern frontend technologies.
      </p>
      <SocialLinks />
    </div>
  );
};

export default About;
