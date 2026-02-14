import { getExperienceAction } from "./action";
import { TExperience } from "./experience.type";
import { ExperienceClient } from "./experience.client";

const Experience = async () => {
  const careerList: TExperience[] = (await getExperienceAction()) ?? [];

  return <ExperienceClient careerList={careerList} />;
};

export { Experience };
