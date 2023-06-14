/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { MotionConfig, motion, useScroll , useInView} from "framer-motion";

export default function OrganisationsHeroSectionTwo() {
  const { scrollYProgress } = useScroll();
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const isInViewOne = useInView(refOne, { once: true });
  const isInViewTwo = useInView(refTwo, { once: true });
  const isInViewThree = useInView(refThree, { once: true });

  return (
    <div className="BL--hero-section BL--organization-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center flex-direction-column">
            <div className="BL--hero-content BL--organization-content">
              <h1 className="cursor-scale small">
              <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                    <motion.div ref={refOne} 
                   initial={{ y: "100%" }}
                      animate={{ y: isInViewOne? "0%" : "100%" }}>
                    <span>Digitize&nbsp;&</span> 
                  </motion.div>
                  </div>
                  
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                    <motion.div  ref={refTwo} 
                  initial={{ y: "100%" }} animate={{ y: isInViewTwo? "0%" : "100%" }}>
                    Streamline
                  </motion.div>
                  </div>
                
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                  <motion.div  ref={refThree}
                 initial={{ y: "100%" }}
                  animate={{ y: isInViewThree? "0%" : "100%"  }}>
                    Operations
                  </motion.div>
                  </div>
          
                </MotionConfig>
              </h1>
              <div className="rt-spacer-30"></div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--organization-image justify-content-end d-flex">
              <div> 
              <img src="/images/organizations/tablet.png" alt="hero"/>
            </div>
              <div className="BL--hero--btn-SAT">
                <span className="hero-btn">
                  Smart <br />
                  Automation <br />
                  Tool
                </span>
              </div>
            </div>
          
          </div>
        </div>
        <div className="rt-spacer-100 mob-none"></div>
        <div className="rt-spacer-50 mob-none"></div>
      </div>
    </div>
  );
}
