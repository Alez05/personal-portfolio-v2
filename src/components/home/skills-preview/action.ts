import { TSkillsPreview } from "./skills-preview.type";

export const getSkillHlAction = async (): Promise<TSkillsPreview | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/skills-preview");
    if (!res.ok) throw new Error("Failed to load home-skills data");

    const data: TSkillsPreview = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
