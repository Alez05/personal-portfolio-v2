export type TSocialPlatform = "facebook" | "github" | "instagram" | "linkedin";

export type TSocial = {
  platform: TSocialPlatform;
  url: string;
  icon: string;
};

export type TContactIcon = {
  locationIcon?: string;
  emailIcon?: string;
  phoneIcon?: string;
};

export type TImage = {
  src?: string,
  alt?: string,

}

export type TAboutMe = TContactIcon & {
  name?: string;
  role?: string;
  text?: string;
  location?: string;
  email?: string;
  phone?: string;
  profile?: string;
  aboutLink?: string;
  downloadLink?: string;
  socials?: TSocial[];
  profileImage?: TImage
};
