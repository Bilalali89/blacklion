/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NewsLetterInvestor() {
  return (
    <div className="BL--newsletter-org-section" id="investor">
      <div className="container">
        <div className="BL--newsletter-org-wrap">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="col-md-4">
                <button className="btn-block BL--newsletter-investor-button" type="submit" id="fugu--submit-btn">
                  Get Updates
                </button>
              </div>
            </div>
          </div>
        </div>
		<div className="BL--newsletter-org--info rt-pt-15">
		*We will only use your email to send you our newsletter and emails about any updates to our products.
		</div>
      </div>
    </div>
  );
}
