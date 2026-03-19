export type TExpertiseCard = {
  title: string;
  icon: string;
  subtitle: string;
  points: string[];
};

export type TSkillsPreview = {
  title: string;
  description?: string;
  cards: TExpertiseCard[];
  cta?: {
    text?: string;
    label: string;
    link: string;
  };
};
