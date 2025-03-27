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
        <span className={css.sftEng}>Frontend Developer </span> specializing in
        React.js, Next.js and TypeScript with 1 year of practical experience
        building responsive SaaS and e-commerce applications. Familiar with REST
        API development, SQL databases, and backend integration using Node.js
        and Express.js. Quick learner who enjoys solving complex UI challenges
        and optimizing web performance.
      </p>
      <SocialLinks />
    </div>
  );
};

export default About;
