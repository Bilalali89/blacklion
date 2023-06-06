/* eslint-disable @next/next/no-img-element */
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";

export default function MusiciansHeroSection() {
  return (
    <div className="fugu--hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex justify-content-center flex-direction-column">
            <div className="fugu--hero-content BL--musicians-content">
              <h1>
                <MotionConfig transition={{ duration: 1, delay: 0 }}>
                  <motion.div
                    initial={{ opacity: 0, x: "-30%" }}
                    animate={{ opacity: 1, x: "0%" }}
                  >
                    Artists,
                  </motion.div>
                </MotionConfig>
                <MotionConfig transition={{ duration: 1, delay: 0.5 }}>
                  <motion.div
                    initial={{ opacity: 0, x: "-30%" }}
                    animate={{ opacity: 1, x: "0%" }}
                  >
                    Producers
                  </motion.div>
                </MotionConfig>
                <MotionConfig transition={{ duration: 1, delay: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, x: "-30%" }}
                    animate={{ opacity: 1, x: "0%" }}
                  >
                    Songwriters!
                  </motion.div>
                </MotionConfig>
              </h1>
              <MotionConfig transition={{ duration: 1, delay: 1.5 }}>
                <motion.p
                  initial={{ opacity: 0, x: "-30%" }}
                  animate={{ opacity: 1, x: "0%" }}
                >
                  Join the revolution today by signing up for early access.
                </motion.p>
              </MotionConfig>
              <MotionConfig transition={{ duration: 1, delay: 2 }}>
                <motion.div
                  initial={{ opacity: 0, y: "-30%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  className="BL--musicians-arrow"
                >
                  <img
                  src="/images/musicians/green-arrow-down.png"
                  alt="greenarrow"
                />
                </motion.div>
              </MotionConfig>

            </div>
          </div>
          <div className="col-lg-5">
            <div className="BL--musicians-hero-right">
              <span className="musicnote">
                <img src="/images/musicians/musicnote.png" alt="musicnote" />
              </span>
              
              <div className="phone"><img src="/images/musicians/phone.png" alt="phone" /></div>
              <div className="bell"><img src="/images/musicians/bell.png" alt="bell" /></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="BL--musicician-mobile-sec">
              <div className="BL--hero--btn-musictoken">
                <span className="hero-btn">Music Tokens</span>
              </div>
              <div className="BL--hero--btn-marketplace">
                <span className="hero-btn">Marketplace</span>
              </div>
              <div className="BL--hero--btn-networking">
                <span className="hero-btn">Creative Networking</span>
              </div>
              <div className="BL--hero--btn-access">
                <span className="hero-btn">Access Capital</span>
              </div>
              <div className="BL--hero--btn-escrow">
                <span className="hero-btn">Digital Escrow</span>
              </div>
              <motion.div whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                 <img src="/images/musicians/mobile-phone.png" alt="mobile" style={{transform:'scale(0.8)'}} />
              </motion.div>
             
            </div>
           
          </div>
        </div>
          <div className="BL--hero--btn button">
              <Link href={"#"} legacyBehavior>
                {/* <a className="hero-btn">GET EARLY ACCESS</a> */}

                <motion.a
                  className="hero-btn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  GET EARLY ACCESS
                </motion.a>
              </Link>
            </div>

        <div className="BL--musicians-hero-shape1">
          <img src="/images/musicians/green-bg.png" alt="greenbg" />
        </div>

        <div className="BL--musicians-hero-shape2">
          <img src="/images/musicians/pathblob.png" alt="purplebg" />
        </div>

        <div className="rt-spacer-50"></div>
        {/* <div className="fugu--hero-shape2"></div> */}
      </div>
    </div>
  );
}
