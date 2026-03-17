import { ContactCTA } from "../../components";
import { HomePreview, ProjectPreview, SkillsPreview} from "./index";

const Home = () => {
  return (
    <main>
      <HomePreview />
      <ProjectPreview />
      <SkillsPreview />
      <ContactCTA />
    </main>
  );
};

export { Home };
