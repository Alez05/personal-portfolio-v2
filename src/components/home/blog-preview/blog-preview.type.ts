export type TBlogItem = {
  image: string;
  link: string;

  title?: string; // optional (for accessibility / future overlay)
};

export type TBlogPreview = {
  title?: string;
  description?: string;

  cta?: {
    label: string;
    link: string;
  };

  blogs: TBlogItem[];
};
