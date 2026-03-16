import { TProjectPreview } from "./project-preview.type";

export const getProjectPreviewAction =
  async (): Promise<TProjectPreview | null> => {
    try {
      const res = await fetch("http://localhost:3000/api/home/project-preview");
      if (!res.ok)
        throw new Error("Failed to load the project highlights data.");

      const data: TProjectPreview = await res.json();
      return data;
    } catch (err) {
      console.error("Failed to load project highlights data.", err);
      return null;
    }
  };
