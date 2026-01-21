// about-hero.tsx
import { getAboutMeAction } from "./action";
import { AboutHeroClient } from "./about-hero.client";
import { AboutMobile } from "./about-mobile/about-mobile";

const AboutHero = async () => {
  const about = await getAboutMeAction();

  if (!about) {
    return (
      <section className="ah-container">
        <p>Failed to load aboutMeData.</p>
      </section>
    );
  }

  return (
    <>
      <AboutHeroClient about={about} />
      <AboutMobile about={about} />
    </>
  );
};

export { AboutHero };
