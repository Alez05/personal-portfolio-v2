"use client";

import { useEffect, useState } from "react";
import { getExperienceAction } from "./action";
import { ExperienceM } from "./experience-m/experience-m";
import { ExperienceD } from "./experience-d";
import { TExperience } from "./experience.type";

const ExperienceP = () => {
  const [careerList, setCareerList] = useState<TExperience[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExperienceAction();
      setCareerList(data || []);
    };
    fetchData();
  }, []);

  if (careerList === null)
    return <p className="cr-error">Loading career data...</p>;

  return (
    <>
      <div className="block md:hidden">
        <ExperienceM careerList={careerList} />
      </div>

      <div className="hidden md:block">
        <ExperienceD careerList={careerList} />
      </div>
    </>
  );
};

export { ExperienceP };
