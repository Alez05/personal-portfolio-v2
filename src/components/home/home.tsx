import { ContactCTA } from "../../components";
import { AboutHl, BlogHl, HomeHl, ProjectHl, SkillsPreview} from "./index";

const Home = () => {
  return (
    <main>
      <HomeHl />
      {/* <AboutHl/> */}
      <SkillsPreview />
      <ProjectHl />
      {/* <BlogHl /> */}
      <ContactCTA />
    </main>
  );
};

export { Home };
