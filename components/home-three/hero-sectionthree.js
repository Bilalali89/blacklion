/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HeroSectionSteps from "./hero-section-steps";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSectionThree() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);
  const refSeven = useRef(null);

  const isInViewOne = useInView(refOne, { once: true });
  const isInViewTwo = useInView(refTwo, { once: true });
  const isInViewThree = useInView(refThree, { once: true });
  const isInViewFour = useInView(refFour, { once: true });
  const isInViewFive = useInView(refFive, { once: true });
  const isInViewSix = useInView(refSix, { once: true });
  const isInViewSeven = useInView(refSeven, { once: true });

  const { scrollYProgress } = useScroll();
  return (
    <div className="BL--hero-section" id="herothree">
      <HeroSectionSteps />
      <div className="container">
        <MotionConfig transition={{ duration: 1 }}>
          <motion.div
            className="BL--headline"
            ref={refOne}
            initial={{ y: "60%" }}
            animate={{
              opacity: isInViewOne ? 1 : 0,
              y: isInViewOne ? "0%" : "60%",
            }}
          >
            <p>
              As a company with laser focus on music and technology, we have
              created two NEW products which are already disrupting the music
              industry in a big way!
            </p>
          </motion.div>
        </MotionConfig>
        <MotionConfig transition={{ duration: 1, delay: 1 }}>
          <motion.div
            ref={refTwo}
            className="BL--greenarrow"
            initial={{ y: "-60%" }}
            animate={{
              opacity: isInViewTwo ? 1 : 0,
              y: isInViewTwo ? "0%" : "-60%",
            }}
          >
            <img src="/images/home/Zigzag-arrow-white.png" alt="arrow" />
          </motion.div>
        </MotionConfig>
      </div>
      <div className="container mb-300">
        <div className="row">
          <div className="col-xl-4 col-md-12 d-flex justify-content-center flex-direction-column">
            <div className="BL--hero-content">
              <h1 className="cursor-scale small">
              <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{display: "block"}}>
                    <motion.div ref={refThree} 
                   initial={{ y: "100%", opacity: "0" }}
                      animate={{ y: isInViewThree? "0%" : "100%", opacity: isInViewThree ? "1" : "0" }}>
                    Blacklion
                  </motion.div>
                  </div>
                  
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{display: "block"}}>
                    <motion.div ref={refFour} 
                  initial={{ y: "100%", opacity: "0" }} animate={{ y: isInViewFour ? "0%" : "100%", opacity: isInViewThree ? "1" : "0" }}>
                    Valuation
                  </motion.div>
                  </div>
                
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{display: "block"}}>
                  <motion.div  ref={refFive}
                 initial={{ y: "100%", opacity: "0" }}
                  animate={{ y: isInViewFive ? "0%" : "100%", opacity: isInViewFive ? "1" : "0"  }}>
                    Engine
                  </motion.div>
                  </div>
          
                </MotionConfig>
              </h1>
              <p>
                The valuation engine blends streaming, financial, social and
                creative data.
              </p>
              <div className="rt-spacer-30"></div>
              <div className="Fheading">Features:</div>
              <div className="FPoints">
                <div className="p-one point">End to end automated</div>
                <div className="p-two point">Real time valuations</div>
                <div className="p-three point">Credit Scores</div>
                <div className="p-four point">Smart Contracting</div>
                <div className="p-five point">Secure payments</div>
                <div className="p-six point">Consumer-facing Interface</div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-12">
            <div className="BL--hero-right">
              <div className="BL-star-section">
                <div className="BL--star--text">
                  <div className="number">100+</div>
                  <div className="alphabet">ARTISTS</div>
                </div>
                <div className="BL--star">
                  <img src="/images/home/Polagon.png" alt="polygon" />
                </div>
              </div>

              <img src="/images/home/Laptop.png" alt="laptop" />
              <div className="BL--hero--btn-Payment">
                <span className="hero-btn">Payments</span>
              </div>
              <div className="BL--hero--btn-SAT">
                <span className="hero-btn">
                  Smart <br />
                  Automation <br />
                  Tool
                </span>
              </div>
              <div className="BL--hero--btn-contracting">
                <span className="hero-btn">Contracting</span>
              </div>
              <div className="BL--hero--btn-evaluation">
                <span className="hero-btn">Evaluation of Earnings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="app">
        <div className="row">
          <div className="col-xl-4 col-md-12 order-2 order-xs-1 order-sm-1 order-md-1 d-flex justify-content-center flex-direction-column">
            <div className="BL--hero-content ">
              <h1 className="cursor-scale small">
              <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{display: "block"}}>
                  <motion.div  ref={refSix}
                 initial={{ y: "100%" }}
                  animate={{ y: isInViewSix ? "0%" : "100%"  }}>
                  Blacklion
                  </motion.div>
                  </div>
          
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{display: "block"}}>
                  <motion.div  ref={refSeven}
                 initial={{ y: "100%", opacity: "0" }}
                  animate={{ y: isInViewSeven ? "0%" : "100%", opacity: isInViewSeven ? "1" : "0"  }}>
                    App
                  </motion.div>
                  </div>
          
                </MotionConfig>
              </h1>
              <p>
                A music networking tool that connects artists, investors,
                creatives and organizations through our app.
              </p>
              <div className="rt-spacer-30"></div>
              <div className="Fheading">Features:</div>
              <div className="FPoints">
                <div className="p-one point">Marketplace</div>
                <div className="p-two point">Creative Networking</div>
                <div className="p-three point">Music Tokens</div>
                <div className="p-four point">Powered by Blockchain</div>
                <div className="p-five point">Digital Escrow</div>
                <div className="p-six point">Instant Messaging</div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-12 order-1 order-xs-2 order-sm-2 order-md-2" style={{ zIndex: "-1" }}>
            <motion.div style={{ scale: scrollYProgress }}>
              <img
                src="/images/home/mobile-app.png"
                alt="mobileapp"
                style={{ transform: "scale(2)", zIndex: "-1" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
