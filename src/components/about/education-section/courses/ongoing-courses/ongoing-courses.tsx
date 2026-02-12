import { getOngoingCAction } from "./action";
import type { TOngCourses } from "./ongoing-courses.type";
import "./ongoing-courses.css";

const OngoingCourses = async () => {
  const coursesList: TOngCourses[] | null = await getOngoingCAction();

  if (!coursesList)
    return <p className="ong-warning">Loading ongoing courses...</p>;

  if (coursesList.length === 0)
    return <p className="ong-warning">No ongoing courses available.</p>;

  return (
    <section className="ong-section">
      <div className="ong-title-wrapper">
        <h1 className="ong-title">
          Ongoing Courses
        </h1>
      </div>

      <div className="ong-cards-container">
        {coursesList.map((course) => (
          <div key={course.id} className="ong-card">
            <div className="ong-card-header">
              {course.nameIcon && (
                <div className="ong-name-icon-wrapper">
                  <i className={`ong-name-icon ${course.nameIcon}`} />
                </div>
              )}

              <div className="ong-card-title">
                <h3 className="ong-name">{course.name}</h3>

                {course.provider && (
                  <p className="ong-provider">{course.provider}</p>
                )}

                {(course.date || course.status) && (
                  <div className="ong-meta">
                    {course.date && (
                      <span className="ong-date">
                        <i className="fa-solid fa-calendar" />
                        {course.date}
                      </span>
                    )}

                    {course.status && (
                      <span
                        className={`ong-status ong-status-${course.status.toLowerCase()}`}
                      >
                        {course.status}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { OngoingCourses };
