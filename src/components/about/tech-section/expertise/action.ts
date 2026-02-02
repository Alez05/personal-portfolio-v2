import { TExpertise } from "./expertise.type";

export const getExpertiseAction = async (): Promise<TExpertise[] | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/about/expertise");
    if (!res.ok) throw new Error("Failed to load the Domain Expertise data.");
    const data: TExpertise[] = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching the Domain expertise data", err);
    return null;
  }
};
