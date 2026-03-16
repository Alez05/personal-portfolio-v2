// actions/getHeroAction.ts
import { THero } from "./home-preview.type";

export const getHomeHl = async (): Promise<THero | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/home-hl");
    if (!res.ok) throw new Error("Failed to load hero data");

    const data: THero = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load hero data", err);
    return null;
  }
};
