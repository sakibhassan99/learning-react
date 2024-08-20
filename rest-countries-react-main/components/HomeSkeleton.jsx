import { Link } from "react-router-dom";

export default function HomeSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((val, i) => {
        return (
          <Link className="country-card" key={`skeleton + ${i}`}>
            <div className="image-container skeleton skeleton-img"></div>
            <div className="country-info">
              <div className="skeleton skeleton-heading"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
