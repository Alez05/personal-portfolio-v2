import { Expertise } from "./expertise";
import { SkillSet } from "./skill-set";
import "./tech-section.css";

const TechSection = () => {
  return (
    <section className="th-container">
      <div className="th-wrapper">
        <h1 className="th-title">
          Technical <span className="th-color">Skills</span>
        </h1>
        <p className="th-description">
          A comprehensive skill set spanning programming languages, frameworks,
          and specialized domains in autonomous systems and computer vision.
        </p>
      </div>
      <Expertise />
      <SkillSet />
    </section>
  );
};

export { TechSection };
