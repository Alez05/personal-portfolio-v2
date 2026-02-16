import { getExpertiseAction } from "./action";
import { TExpertise } from "./expertise.type";
import "./expertise.css";

const Expertise = async () => {
  const expertiseList: TExpertise[] | null = await getExpertiseAction();

  // ❌ Failed request
  if (!expertiseList) {
    return (
      <section className="exp-container">
        <p className="exp-error">Failed to load expertise data.</p>
      </section>
    );
  }

  // ⚠️ No data returned
  if (expertiseList.length === 0) {
    return (
      <section className="exp-container">
        <p className="exp-error">No expertise data available.</p>
      </section>
    );
  }

  return (
    <section className="exp-container">
      <div className="exp-title-wrapper">
        <h1 className="exp-title">Area of Focus</h1>
      </div>

      <div className="exp-wrapper">
        {expertiseList.map((expertise, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-card-header">
              <i className={expertise.icon}></i>
              <h2 className="exp-card-title">{expertise.title}</h2>
            </div>

            <p className="exp-card-subtitle">{expertise.subtitle}</p>

            <div className="exp-card-content">
              {expertise.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Expertise };
