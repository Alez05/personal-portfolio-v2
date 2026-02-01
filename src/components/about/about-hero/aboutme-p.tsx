// about-hero.tsx
import { getAboutMeAction } from "./action";
import { AboutMeM } from "./aboutme-m";
import { AboutMeD } from "./aboutme-d";
import "./aboutme-p.css";

const AboutMeP = async () => {
  const about = await getAboutMeAction();

  if (!about) {
    return (
      <section className="abm-parent-state">
        <p className="abm-parent-error">
          Failed to load About section.
        </p>
      </section>
    );
  }

  return (
    <>
      {/* MOBILE ≤599px */}
      <div className="block sm:hidden">
        <AboutMeM about={about} />
      </div>

      {/* TABLET + DESKTOP ≥600px */}
      <div className="hidden sm:block">
        <AboutMeD about={about} />
      </div>
    </>
  );
};

export { AboutMeP };
