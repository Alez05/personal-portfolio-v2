import "./projects.css";
import { getProjectSectionAction } from "./action";
import { TProjectSection } from "./projects.type";
import { ProjectCard } from "../project-card";

const ProjectSection = async ({ }: TProjectSection) => {
  const data = await getProjectSectionAction();

  if (!data) {
    return (
      <section className="prs-container">
        <p className="prs-error">Failed to load project section</p>
      </section>
    );
  }

  return (
    <section className="prs-container">
      <div className="prs-wrapper">
        {data.preTitle && <h2 className="prs-pretitle">{data.preTitle}</h2>}
        {data.title && <h1 className="prs-title">{data.title}</h1>}
        {data.description && (
          <p className="prs-description">{data.description}</p>
        )}
      </div>

      <ProjectCard />
    </section>
  );
};

export { ProjectSection };
