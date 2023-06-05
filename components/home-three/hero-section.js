/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MotionConfig, motion, easeIn} from "framer-motion";


export default function HeroSection() {
  const eased = easeIn(0.5)

  return (
    <div className="fugu--hero-section home-hero-one">
      <div id="fugu--counter"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1>
                <MotionConfig transition={{duration: 1, delay: 0}}>
                  <motion.div initial={{ opacity: 0, x:"-30%"}}
                animate={{ opacity: 1, x:"0%" }}>Enhanced</motion.div>
                </MotionConfig>
                <MotionConfig transition={{duration: 1, delay: 0.5}}>
                  <motion.div initial={{ opacity: 0, x:"-30%"}}
                animate={{ opacity: 1, x:"0%" }}>Music</motion.div>
                </MotionConfig><MotionConfig transition={{duration: 1, delay: 1}}>
                  <motion.div initial={{ opacity: 0, x:"-30%"}}
                animate={{ opacity: 1, x:"0%" }}>Valuation</motion.div>
                </MotionConfig>
                <MotionConfig transition={{duration: 1.2, delay: 1.5}}>
                  <motion.div  initial={{ opacity: 0, x:"-30%"}}
                animate={{ opacity: 1, x:"0%" }}><span className="text">with</span> AI</motion.div>
                </MotionConfig>
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right">
              <MotionConfig transition={{duration: 1}}>
              <motion.span initial={{x:"-200%", rotate:"90deg"}}  animate={{x:"0%", rotate:"0deg"}} className="dollar"> <img src="/images/home/Dollar-mark.png" alt="dollar" /></motion.span>
              </MotionConfig>
           
              <MotionConfig transition={{duration: 1}}>
              <motion.div initial={{ opacity: 0, scale: 0, x: "100%"}}
                animate={{ opacity: 1 , scale: 1, x: " 0%" }}>
                {" "}
                <img src="/images/home/Laptop-home.png" alt="laptop" />
              </motion.div>
                </MotionConfig>
              
            </div>
            <div className="BL--hero--btn">
              <Link href={"#"} legacyBehavior>
                {/* <a className="hero-btn">GET EARLY ACCESS</a> */}
                
                <motion.a
                  className="hero-btn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  GET EARLY ACCESS
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
        <div className="fugu--hero-shape1" style={{ zIndex: "-2" }}>
          <img src="/images/all-img/v3/shape-hero1.png" alt="shape" />
        </div>
        <div className="fugu--hero-shape2" style={{ zIndex: "-2" }}></div>
      </div>
    </div>
  );
}
