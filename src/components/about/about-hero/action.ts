import { TAboutMe } from "./about-hero.type";

export const getAboutMeAction = async(): Promise<TAboutMe | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/aboutme");
    if (!res.ok) throw new Error("Failed to load data from aboutMeData.");

    const data: TAboutMe = await res.json()
    return data
  } catch (err) {
    console.error("Failed to load the aboutMeData", err)
    return null;
  }
}
