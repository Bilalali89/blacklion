/* eslint-disable @next/next/no-img-element */

export default function OrganisationsHeroSectionThree() {
  return (
    <div className="fugu--hero-section BL--org-hero-section-3">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center flex-direction-column"
          >
            <div className="fugu--hero-content BL--org--text">
              <p>Currently being used by</p>
              <h1>
                100+
              </h1>
              <p>Musicians</p>
            </div>
            <div className="BL--org-arrow">
              <img src="/images/organizations/white-arrow.png" alt="arrow" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--musicians-hero2-right">
              <img
                src="/images/organizations/artist-collage.png"
                alt="artist"
                className="collage"
              />
              <div className="BL--org-ellipse">
                <img src="/images/organizations/ellipse.png" alt="ellipse" />
              </div>
              <div className="BL--org-disc">
                <img src="/images/organizations/disc.png" alt="disc" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container BL--org-text-container">
        <div className="row">
          <div className="BL--org-text-alt">& industry market leader</div>
          <div className="BL--org--logo">
            <img src="/images/organizations/create-music-logo.png" alt="logo" />
            <div className="BL--org--leftring">
                <img src="/images/organizations/oval-gradient.png" alt="oval" />
            </div>
            
          </div>
          <div className="BL--org--cross">
            <img src="/images/organizations/white-cross.png" alt="cross" />
          </div>
         
        </div>
      </div>
    </div>
  );
}
