/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HeroSectionThreeMusician() {
  return (
    <div className="fugu--hero-section" id="musicianherothree">
      
      <div className="container" id="app"> 
        <div className="row">
            <div className="col-lg-4">
                <img src="/images/musicians/card.png" alt="card" />
            </div>
          <div
            className="col-lg-8 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="BL--hero3-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                 Connect <br/>
                Collaborate <br/>
                Create <br/>
                Cash-In
              </h1>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
