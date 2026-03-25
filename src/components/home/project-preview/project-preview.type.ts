export type TProjectVideo = {
  video?: string;
  name?: string;
  field?: string;
  year?: string;
  tags?: string[];   // changed from tag?: string
};

export type TProjectCta = {
  href: string;
  label: string;
};

export type TProjectPreview = {
  title?: string;
  description?: string;
  label?: string;
  counter?: string;
  videos?: TProjectVideo[];
  cta?: TProjectCta[];
};
