/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { MotionConfig, motion, useScroll , useInView} from "framer-motion";

export default function HeroSectionTwo() {

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const isInViewOne = useInView(refOne, { once: true });
  const isInViewTwo = useInView(refTwo, { once: true });
  const isInViewThree = useInView(refThree, { once: true });

  return (
    <div className="BL--hero-section home-hero-2">

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center flex-direction-column"
          >
            <div className="BL--hero-content">
              <h1 className="cursor-scale small">
                <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflow: "hidden", display: "inline-block"}}>
                    <motion.div ref={refOne} 
                   initial={{ y: "100%" }}
                      animate={{ y: isInViewOne? "0%" : "100%" }}>
                    <span>Digitize&nbsp;&</span> 
                  </motion.div>
                  </div>
                  
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflow: "hidden", display: "inline-block"}}>
                    <motion.div  ref={refTwo} 
                  initial={{ y: "100%" }} animate={{ y: isInViewTwo? "0%" : "100%" }}>
                    Streamline
                  </motion.div>
                  </div>
                
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{overflow: "hidden", display: "inline-block"}}>
                  <motion.div  ref={refThree}
                 initial={{ y: "100%" }}
                  animate={{ y: isInViewThree? "0%" : "100%"  }}>
                    Operations
                  </motion.div>
                  </div>
          
                </MotionConfig>
              </h1>
            
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right"> 
              <img src="/images/organizations/tablet.png" alt="hero"  />
            </div>
           
          </div>
        </div>
       
        <div className="BL--hero-shape1">
          <img src="/images/home/bluegradient.png" alt="shape" />
        </div>
        <div className="BL--hero-shape2"></div>
        <div className="BL--hero-shape3">
          <img src="/images/home/purple.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}
