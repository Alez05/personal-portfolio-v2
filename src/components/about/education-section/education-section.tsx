import { Courses, OngoingCourses } from "./courses";
import { Education } from "./education/education";
import { Languages } from "./language/language";
import "./education-section.css";

const EducationSection = () => {
  return (
    <section className="edu-section">
      <header className="edu-header">
        <h1 className="edu-title">Professional Development</h1>
        <p className="edu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae praesentium nobis quia incidunt voluptas amet at, aliquid suscipit sint tempora non ipsa repudiandae velit dolore nam labore magni officiis.</p>
      </header>

      <div className="edu-content">
        <Education />
        <Courses />
        <OngoingCourses />
        <Languages />
      </div>
    </section>
  );
};

export { EducationSection };
