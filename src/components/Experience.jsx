import React, { memo } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = memo(({ experience }) => {
  const { date, icon, iconBg, company_name, title, points } = experience;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.9)",
        boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        color: "#fff",
        padding: "24px",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      contentArrowStyle={{ borderRight: "7px solid #2d2f39" }}
      date={<span className="text-[#915EFF] font-semibold">{date}</span>}
      iconStyle={{
        background: iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      icon={
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </motion.div>
      }
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-[#b3b3b3] text-[16px] font-medium mt-1">{company_name}</p>
      </motion.div>

      {points.length > 0 && (
        <ul className="mt-4 list-disc ml-5 space-y-3">
          {points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
});

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} text-center text-[#b3b3b3]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#915EFF]`}>
          Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={`experience-${index}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
