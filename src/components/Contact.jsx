import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {};
  return (
    <>
      <div variants={textVariant()}>
        <motion.div className="w-full mt-10">
          <div className="w-full border border-black-400 rounded-md shadow-lg p-10 bg-white-100">
            <p className={styles.sectionSubText}>GET IN TOUCH</p>
            <h2 className={styles.sectionHeadText}>Contact Me</h2>
            <form className="mt-8 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-black-200 font-medium mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white py-4 px-6 placeholder:text-black-100 text-black-200 rounded-lg outlined-none border-none font-medium shadow-sm"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black-200 font-medium mb-4">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white py-4 px-6 placeholder:text-black-100 text-black-200 rounded-lg outlined-none border-none font-medium shadow-sm"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black-200 font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-white py-4 px-6 placeholder:text-black-100 text-black-200 rounded-lg outlined-none border-none font-medium shadow-sm"
                />
              </label>
              <button
                type="submit"
                className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary cursor-pointer rounded-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
