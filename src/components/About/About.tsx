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
        <span className={css.sftEng}>Frontend Developer </span> with experience
        in scalable web apps using HTML5, CSS3, JS, React, TypeScript, and
        Redux. Passionate about clean UI, responsive design, and state
        management. Strong team player, collaborated with designers and backend
        devs. Eager to learn and grow!
      </p>
      <SocialLinks />
    </div>
  );
};

export default About;
