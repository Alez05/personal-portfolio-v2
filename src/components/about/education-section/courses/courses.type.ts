export type TCourses = {
  id?: string;
  sectionTitle?:string;
  name?: string;
  nameIcon?: string;
  provider?: string;
  date?: string;
  status?: "Completed" | "Ongoing" | "Planned";
  description?: string;
  contentTitle?: string;
  content?: string[];

  icons?: {
    date?: string;
  };
  courseId?: string;
  courseLink?: string;
};
