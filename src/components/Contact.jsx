import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required! ❌", { position: "top-center" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpvdprd", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully! ✅", { position: "top-center" });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong! ❌", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Error sending message! ❌", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
          {['name', 'email', 'message'].map((field, index) => (
            <motion.label
              key={field}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-white font-medium mb-2 capitalize">Your {field}</span>
              {field === 'message' ? (
                <textarea
                  rows={5}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field} here...`}
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg border-2 border-transparent focus:border-primary transition-all duration-300"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field} here...`}
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg border-2 border-transparent focus:border-primary transition-all duration-300"
                />
              )}
            </motion.label>
          ))}

          <button
            type="submit"
            className="bg-primary hover:bg-opacity-80 transition-all duration-300 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center justify-center"
          >
            {loading ? <span className="animate-pulse">Sending...</span> : "Send"}
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={3000} hideProgressBar theme="dark" />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
