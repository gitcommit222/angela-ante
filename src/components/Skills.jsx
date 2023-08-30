import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE?</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
