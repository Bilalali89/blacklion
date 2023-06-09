/* eslint-disable @next/next/no-img-element */

export default function HeroSectionThreeMusician() {
  return (
    <div className="BL--hero-section" id="musicianherothree">
      <div className="container" id="app">
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/musicians/card.png" alt="card" />
          </div>
          <div
            className="col-lg-8 d-flex justify-content-center flex-direction-column"
          >
            <div className="BL--hero3-content">
              <h1>
                Connect <br />
                Collaborate <br />
                Create <br />
                Cash-In
              </h1>
            </div>
          </div>
        </div>
        <div className="BL--musicians-hero3-shape2">
          <img src="/images/musicians/shape-hero3.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}
