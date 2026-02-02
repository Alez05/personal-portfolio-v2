export type EducationLevel = "highschool" | "bachelor" | "bootcamp" | "certificate";

export type EducationType = "formal" | "bootcamp" | "self-paced";

// Generic section structure for highlights, coursework, technologies, etc.
export type SectionContent = {
  title: string;   // Section title (e.g., "Highlights", "Coursework")
  items: string[]; // List of items in the section
};

export type TEducation = {
  id: string;
  institution: {
    name: string;
    emblem?: string;
    location?: {
      city?: string;
      country?: string;
    };
  };
  credential: {
    title: string;
    level: EducationLevel;
  };
  program?: {
    specialization?: string;
    academicFocus?: string[];
    researchInterest?: string;
    coreAreas?: string[];
  };
  timeline?: {
    startDate: string;
    endDate?: string;
    status?: string;
  };
  description?: string;
  sections?: SectionContent[]; // All highlights, coursework, technologies, etc. go here
};
