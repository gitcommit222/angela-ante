import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
        <motion.div className="w-full mt-10">
          <div className="w-full border border-black-400 h-[600px] rounded-md shadow-lg"></div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
