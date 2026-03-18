import { ContactCTA } from "../../components";
import { BlogPreview, HomePreview, ProjectPreview, SkillsPreview} from "./index";

const Home = () => {
  return (
    <main>
      <HomePreview />
      <ProjectPreview />
      <SkillsPreview />
      <BlogPreview />
      <ContactCTA />
    </main>
  );
};

export { Home };
