import { TBlogPreview } from "./blog-preview.type";

export const getBlogPreviewAction = async (): Promise<TBlogPreview | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/home/blog-preview");
    if (!res.ok) throw new Error("Failed to load the BlogHl data.");

    const data: TBlogPreview = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load BlogsHl data.", err);
    return null;
  }
};
