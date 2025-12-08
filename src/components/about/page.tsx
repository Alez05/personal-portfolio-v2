import { ContactCTA } from "../shared";
import { AboutHero } from "./about-hero";
import { CareerJourney } from "./career-journey";
import { TechSection } from "./tech-section";
import { EducationSection } from "./education-section";
import { Hobbies } from "./hobbies";

const About = () => {
  return (
    <div>
      <AboutHero />
      {/* <DownloadSection /> */}
      <CareerJourney />
      <TechSection />
      <EducationSection />
      <Hobbies />
      <ContactCTA />
    </div>
  );
};

export { About };
