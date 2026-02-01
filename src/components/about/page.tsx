import { ContactCTA } from "../shared";
import { AboutMeP } from "./about-hero";
import { ExperienceP } from "./experience";
import { TechSection } from "./tech-section";
import { EducationSection } from "./education-section";
import { Hobbies } from "./hobbies";

const About = () => {
  return (
    <div>
      <AboutMeP />
      {/* <DownloadSection /> */}
      <ExperienceP />
      <TechSection />
      <EducationSection />
      <Hobbies />
      <ContactCTA />
    </div>
  );
};

export { About };
