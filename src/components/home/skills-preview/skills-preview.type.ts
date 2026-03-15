export type TSkill = {
  name: string;
  icon: string;
};

export type TSkillsPreview = {
  title: string;
  description?: string;
  skills: TSkill[];
  cta?: {
    text: string;
    label: string;
    link: string;
  };
};
