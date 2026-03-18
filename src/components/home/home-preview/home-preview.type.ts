// hero.type.ts

// Contact item (data + behavior)
export type TContactItem = {
  type: "location" | "email" | "phone" | "link";

  label?: string;
  value: string;

  icon?: string;

  action?: {
    type: "copy" | "link";
    href?: string;
  };
};

// CTA buttons
export type THomeCTA = {
  label: string;
  href: string;

  variant?: "primary" | "secondary";
  download?: boolean;
};

// Visual floating items (right side)
export type THeroVisualItem = {
  label: string;
  icon: string;
};

// Main Hero type
export type THomePreview = {
  eyebrow?: string;

  name?: string;
  role?: string;
  tagline?: string;

  contacts?: TContactItem[];

  visuals?: THeroVisualItem[]; // 👈 floating icons

  ctas?: {
    primary?: THomeCTA;
    secondary?: THomeCTA;
  };
};
