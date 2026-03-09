import { ContactCTA } from "../shared"
import { HeroPr } from "./hero-pr"
import { ProjectSection } from "./projects-section"
import { ProjectCard } from "./project-card"

const Projects = () => {
  return (
    <main>
      <HeroPr />
      <ProjectSection />
      {/* <ProjectCard /> */}
      <ContactCTA />
    </main>
  )
}

export { Projects }
