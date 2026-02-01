export type TExperience = {
  jobTitle: string
  company: string
  companyImg: string;
  location: string
  locationType: string
  employmentType?: string
  date: string
  description?: string
  responsibilitiesTitle: string
  responsibilities: string[]
  technologiesTitle: string
  technologies: string[]
  icons: {
    location: string
    date: string
  }
}
