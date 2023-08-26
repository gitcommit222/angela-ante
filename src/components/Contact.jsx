import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
