import { styles } from "../styles";
import { animate } from "../utils/animate";
import { HiOutlineDownload } from "react-icons/hi";
import Tilt from "react-parallax-tilt";
import 'animate.css';

import resume from "/resume.pdf";
import { heropic } from "../assets";

const Hero = () => {
  return (
    <div className="w-full relative h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row justify-center items-center gap-6 overflow-hidden`}
      >
        <div className={`flex flex-col justify-center items-center ${animate.fadeInDown} animate__delay-1s animate__faster`}>
          <div className={`w-5 h-5 rounded-full bg-primary mt-5`} />
          <div className={`w-1 sm:h-80 h-60 line-gradient`} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} ${animate.fadeIn}  animate__delay-2s`}>
            Hi, I am <span className="text-primary">Mhar Nhel</span>
          </h1>
          <p className={`${styles.heroSubText} ${animate.fadeIn}  animate__delay-2s`}>
            Web Developer, I develop web applications
            <br className="sm:block hidden" /> and user interfaces.
          </p>
          <div className={`mt-5 p-2 bg-primary sm:w-[135px] w-[100px] rounded-[5px] mb-5 text-white cursor-pointer ${animate.fadeIn}  animate__delay-2s`}>
            <a
              href={resume}
              download="resume.pdf"
              className="flex items-center justify-center gap-1 sm:text-[18px] text-[13px]"
            >
              Resume <HiOutlineDownload size={19} />
            </a>
          </div>
        </div>
        <div>
          <Tilt className={`lg:block hidden ${animate.fadeIn}  animate__delay-3s`}>
            <div className="block w-[380px] rounded-full blue-gradient p-[5px] shadow-card">
              <img
                src={heropic}
                alt="heropic"
                className="hero-img rounded-full object-contain w-[380px] h-[380px] gray-gradient"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
