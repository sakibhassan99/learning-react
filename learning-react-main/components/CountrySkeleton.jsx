export default function CountrySkeleton() {
  return (
    <section id="country-container">
      <div className="country-details">
        <div className="image-container skeleton detail-skeleton-img">
          <img className="countryImg" />
        </div>
        <div className="country-info load-skeleton">
          <div className="skeleton detail-skeleton-heading"></div>
          <div className="details_container">
            <div className="left-details">
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
            </div>
            <div className="right-details">
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries: </p>
            <div className="countries">
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
              <div className="skeleton detail-skeleton-text"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
