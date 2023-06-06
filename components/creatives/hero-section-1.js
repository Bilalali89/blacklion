/* eslint-disable @next/next/no-img-element */


export default function CreaetivesHeroSection() {
  return (
    <div className="fugu--hero-section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center flex-direction-column"
          >
            <div className="fugu--hero-content BL--musicians-content">
              <h1>
                Calling<br />
                All
                <br />
               Creatives
              </h1>
        
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--musicians-hero-right">      
              <img src="/images/creatives/horn.png" alt="horn" />
            </div>
          </div>
        </div>
        <div className="BL--musicians-hero-shape1">
          <img src="/images/musicians/green-bg.png" alt="greenbg" />
        </div>
      </div>
    </div>
  );
}
