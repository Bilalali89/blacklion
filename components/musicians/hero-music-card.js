/* eslint-disable @next/next/no-img-element */

export default function MusicianDataInsight() {
  return (
    <div className="BL--musician--data-insight">
       <div className="rt-spacer-100"></div>
      <div className="container">
        <div className="row">
          <div className="heading">DATA INSIGHTS ON</div>
          
          <div className="rt-spacer-100"></div>
          <div className="insight-cards">
            <div className="row">
          <div className="col-4">
            <div className="card-left">
              {" "}
              <img src="/images/musicians/data-insight.png" alt="insight" />
            </div>
          </div>
          <div className="col-4">
            <div className="card-center">
              {" "}
              <img src="/images/musicians/data-insight.png" alt="insight" />
            </div>
          </div>
          <div className="col-4">
            <div className="card-right">
              <img src="/images/musicians/data-insight.png" alt="insight" />
            </div>
          </div>
          </div>
        </div>
        <div className="rt-spacer-100"></div>
        <div className="rt-spacer-100"></div>
        </div>
        
      </div>
    </div>
  );
}
