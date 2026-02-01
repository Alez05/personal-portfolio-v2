export type TSocialPlatform =
  | "email"
  | "github"
  | "instagram"
  | "linkedin";

export type TSocial = {
  platform: TSocialPlatform;
  url: string;
  icon: string;
};

export type TContact = {
  location?: string;
  email?: string;
  phone?: string;
};

export type TImage = {
  src?: string;
  alt?: string;
};

export type TAboutMe = {
  title: string;          // "Getting to know me"
  name: string;           // Alex
  role: string;           // Fullstack Developer
  description: string;    // who I am / what I do / what I offer
  currentFocus?: string;  // optional highlight line
  downloadLink?: string;  // used by <DownloadButton />
  seeMore?: string;      // e.g. "/projects"
  socials?: TSocial[];
  profileImage?: TImage;
  contact?: TContact;
};
