// actions/getHeroAction.ts
import { THomePreview } from "./home-preview.type";

export const getHomePreviewAction = async (): Promise<THomePreview | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/home-preview");
    if (!res.ok) throw new Error("Failed to load hero data");

    const data: THomePreview = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load hero data", err);
    return null;
  }
};
