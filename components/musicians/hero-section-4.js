/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";

export default function HeroSectionFourMusicians() {
  return (
    <div className="BL--musician-hero4-section">
      <div className="container">
        <div className="heart">
          <img
            src="/images/musicians/heart-blur.png"
            className="heartimg"
            alt="heart"
          />
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="BL--hero--btn-findcreative">
                <span className="hero-btn">Find Creatives</span>
                
              </div>
              <div className="BL--musician-hero4-content">
                <h1 className="cursor-scale small">Match-Making</h1>
                <div className="rt-spacer-40"></div>
                <p className="cursor-scale small">We’re not Tinder, but we will find you the right partner</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <img
                src="/images/musicians/hero-section-4-1.png"
                alt="wave"
                className="imgwave"
              />
              
            </div>
            <div className="col-lg-7">
              <img
                src="/images/musicians/hero-section-4-2.png"
                alt="card"
                className="imgcard"
              />
            </div>
            <div className="BL--hero--btn-findmusicians">
                <span className="hero-btn">Find Musicians</span>
                
              </div>
              <div className="BL--hero--btn-findinvestors">
                <span className="hero-btn">Find Investors</span>
                
              </div>
          </div>
        </div>
      </div>

      <div className="container mt-400">
        <div className="BL--musician-hero4-cta">
          <h3 className="heading">Become a Lion in a musical jungle!</h3>
          <div className="fugu--hero-btn">
            <Link href={"#"} legacyBehavior>
            <motion.a
              className="fugu--btn bg-gray active special"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Get Early Access!
            </motion.a>
            </Link>
          </div>
        </div>
        <div className="BL--musician-hero4-arrow">
          <img src="/images/musicians/arrows-white.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
}
