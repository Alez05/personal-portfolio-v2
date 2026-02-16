// Hobbies.tsx
import "./hobbies.css";
import { getHobbiesAction } from "./action";
import type { THobbies } from "./hobbies.type";

const Hobbies = async () => {
  const hobbies: THobbies[] | null = await getHobbiesAction();

  if (!hobbies) return <p className="ho-warning">Failed to load hobbies...</p>;

  return (
    <section className="ho-container">
      <h1 className="ho-title">Hobbies & Interests</h1>

      <div className="ho-grid">
        {hobbies.map((hobby, i) => (
          <article key={i} className="ho-card">
            <div className="ho-card-wrapper">
              {/* Icon */}
              <i className={`${hobby.categoryIcon} ho-icon`} />
              {/* Category */}
              <h2 className="ho-card-title">{hobby.category}</h2>
            </div>

            {/* Description */}
            {hobby.description && (
              <p className="ho-description">{hobby.description}</p>
            )}

            {/* Books */}
            {hobby.books && hobby.books.length > 0 && (
              <div className="ho-books">
                {hobby.books.map((book, idx) => (
                  <div key={idx} className="ho-book">
                    <img
                      src={book.bookImage}
                      alt={book.booktitle}
                      className="ho-book-img"
                    />

                    <div className="ho-book-details">
                      <p className="ho-book-status">{book.status}</p>
                      <p className="ho-book-title">{book.booktitle}</p>
                      <p className="ho-book-author">by {book.bookAuthor}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export { Hobbies };
