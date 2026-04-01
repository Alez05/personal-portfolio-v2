import type { TProjectPreview } from "./project-preview.type";
import { getProjectPreviewAction } from "./action";
import { ProjectPreviewClient } from "./project-preview.client";
import "./project-preview.css";

const ProjectPreview = async () => {
  const data: TProjectPreview | null = await getProjectPreviewAction();

  if (!data) {
    return (
      <section className="ph-section-parent">
        <div className="ph-container">
          <p className="ph-error">Failed to load projects</p>
        </div>
      </section>
    );
  }

  const { title, description, videos } = data;

  return (
    <section className="ph-section-parent">
      <div className="ph-left">
        {title && <h2 className="ph-title">{title}</h2>}
        {description && <p className="ph-description">{description}</p>}
      </div>
      <div className="ph-layout">
        {/* LEFT COLUMN */}

        {/* RIGHT COLUMN */}
        <div className="ph-right">
          <div className="ph-client-column">
            <ProjectPreviewClient videos={videos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectPreview };
