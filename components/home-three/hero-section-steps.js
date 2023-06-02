/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HeroSectionSteps() {
  return (
    <div className="BL--home-steps-section">
        <div className="container">
            <div className="row b1">
                <div className="col-xl-6">
                    <div className="BL-step step-one">
                        <div className="step">STEP ONE</div>
                        <div className="heading">Identify</div>
                        <div className="desc">emerging musicians, data and trends</div>
                    </div>
                </div>
            </div>
            <div className="row b2">
                <div className="col-xl-6 offset-xl-2">
                    <div className="BL-step step-two">
                        <div className="step">STEP TWO</div>
                        <div className="heading">Evaluate</div>
                        <div className="desc">musical assets</div>
                    </div>
                </div>
            </div>
            <div className="row b3">
                <div className="col-xl-6 offset-xl-4">
                    <div className="BL-step step-three">
                        <div className="step">STEP THREE</div>
                        <div className="heading">Sign</div>
                        <div className="desc">automated contracts</div>
                    </div>
                </div>
            </div>
            <div className="row b4">
                <div className="col-xl-6 offset-xl-6">
                    <div className="BL-step step-four">
                        <div className="step">STEP FOUR</div>
                        <div className="heading">Pay</div>
                        <div className="desc">secure payments globally</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
