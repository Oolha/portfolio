import styles from "./Tools.module.css";
import { techStack } from "../../config/stack";

const Tools = () => {
  return (
    <div id="tools" className={styles.container}>
      <h2 className={styles.title}>Skills & Tools</h2>

      <div className={styles.stackContainer}>
        {techStack.map((category) => (
          <div key={category.category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>

            {category.tools ? (
              <div className={styles.toolsGrid}>
                {category.tools.map((tool) => (
                  <div key={tool.name} className={styles.tool}>
                    <div className={styles.toolIcon}>{tool.icon}</div>
                    <span className={styles.toolName}>{tool.name}</span>
                  </div>
                ))}
              </div>
            ) : category.items ? (
              <ul className={styles.skillsList}>
                {category.items.map((item, index) => (
                  <li key={index} className={styles.skillItem}>
                    {typeof item === "string"
                      ? item
                      : `${item.language} - ${item.level}`}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
