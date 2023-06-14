/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import TextSliderOne from "../common/sliders/text/text-slider-one";

export default function HeroSection() {
  return (
    <>
      <div className="BL--hero-section home-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center flex-direction-column">
              <div className="BL--hero-content">
                <h1 className="cursor-scale small">
                  <MotionConfig transition={{ duration: 1, delay: 0 }}>
                    <motion.div
                      initial={{ opacity: 0, x: "-30%" }}
                      animate={{ opacity: 1, x: "0%" }}
                    >
                      Enhanced
                    </motion.div>
                  </MotionConfig>
                  <MotionConfig transition={{ duration: 1, delay: 0.5 }}>
                    <motion.div
                      initial={{ opacity: 0, x: "-30%" }}
                      animate={{ opacity: 1, x: "0%" }}
                    >
                      Music
                    </motion.div>
                  </MotionConfig>
                  <MotionConfig transition={{ duration: 1, delay: 1 }}>
                    <motion.div
                      initial={{ opacity: 0, x: "-30%" }}
                      animate={{ opacity: 1, x: "0%" }}
                    >
                      Valuation
                    </motion.div>
                  </MotionConfig>
                  <MotionConfig transition={{ duration: 1.2, delay: 1.5 }}>
                    <motion.div
                      initial={{ opacity: 0, x: "-30%" }}
                      animate={{ opacity: 1, x: "0%" }}
                    >
                      <span className="text">with</span> AI
                    </motion.div>
                  </MotionConfig>
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="BL--hero-right">
                <MotionConfig transition={{ duration: 1, delay: 2 }}>
                  <motion.span
                    initial={{ x: "50%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    className="dollar"
                  >
                    {" "}
                    <img src="/images/home/Dollar-mark.png" alt="dollar" />
                  </motion.span>
                </MotionConfig>

                <MotionConfig transition={{ duration: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: "100%" }}
                    animate={{ opacity: 1, scale: 1, y: " 0%" }}
                  >
                    {" "}
                    <img src="/images/home/Laptop-home.png" alt="laptop" />
                  </motion.div>
                </MotionConfig>
              </div>
              <div className="BL--hero--btn">
                <Link href={"#"} legacyBehavior>

                  <motion.a
                    className="hero-btn"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    GET EARLY ACCESS
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
          <div className="BL--hero-shape1" style={{ zIndex: "-2" }}>
            <img src="/images/all-img/v3/shape-hero1.png" alt="shape" />
          </div>
          <div className="BL--hero-shape2" style={{ zIndex: "-2" }}></div>
        </div>
        <TextSliderOne backgroundColor="transparent" />
      </div>
    </>
  );
}
