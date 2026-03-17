// hero.type.ts

// Contact item (reusable & scalable)
export type TContactItem = {
  type: "location" | "email" | "phone";
  value: string;
  icon: string;
};

// CTA buttons
export type THomeCTA = {
  label: string;
  link: string;
};

// Main Hero type
export type THomePreview = {
  name?: string;
  role?: string;
  text?: string;

  profile?: string; // optional image/avatar if you ever want it

  contacts?: TContactItem[];

  ctas?: {
    primary?: THomeCTA;
    secondary?: THomeCTA;
  };
};
