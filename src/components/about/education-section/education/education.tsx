import { EducationM } from "./education-m/education-m";
import { EducationD } from "./education-d/education-d";
import { educationData } from "../../../../app/api";

const EducationP = async () => {
  // later: await getEducationAction()
  const eduList = educationData ?? [];

  return (
    <>
      <div className="block md:hidden">
        <EducationM educationList={eduList} />
      </div>

      <div className="hidden md:block">
        <EducationD educationList={eduList} />
      </div>
    </>
  );
};

export { EducationP };
