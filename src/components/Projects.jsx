import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
