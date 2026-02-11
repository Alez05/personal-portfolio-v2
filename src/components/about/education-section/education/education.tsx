// education.tsx
import { getEducationAction } from "./action";
import { EducationClient } from "./education.client";
import "./education.css";

const Education = async () => {
  const educationList = await getEducationAction();

  if (!educationList || educationList.length === 0) {
    return <p className="ed-error">No education data available</p>;
  }

  return <EducationClient educationList={educationList} />;
};

export { Education };
