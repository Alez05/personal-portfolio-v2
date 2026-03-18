// home-preview.tsx (SERVER)
import { THomePreview } from "./home-preview.type";
import { getHomePreviewAction } from "./action";
import { HomePreviewClient } from "./home-preview.client";
import "./home-preview.css";

const HomePreview = async () => {
  const hero: THomePreview | null = await getHomePreviewAction();

  if (!hero) {
    return (
      <section className="hero-container">
        <p>Failed to load hero</p>
      </section>
    );
  }

  return <HomePreviewClient hero={hero} />;
};

export { HomePreview };
