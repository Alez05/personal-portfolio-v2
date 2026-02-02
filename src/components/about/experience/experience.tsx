import { getExperienceAction } from "./action";
import { ExperienceM } from "./experience-m/experience-m";
import { ExperienceD } from "./experience-d";
import { TExperience } from "./experience.type";

const ExperienceP = async () => {
  const careerList: TExperience[] = (await getExperienceAction()) ?? [];

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <ExperienceM careerList={careerList} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <ExperienceD careerList={careerList} />
      </div>
    </>
  );
};

export { ExperienceP };
