/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { MotionConfig, motion, useScroll , useInView} from "framer-motion";

export default function HeroSectionTwoMusicians() {

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const isInViewOne = useInView(refOne, { once: true });
  const isInViewTwo = useInView(refTwo, { once: true });
  const isInViewThree = useInView(refThree, { once: true });

  return (
    <div className="BL--hero-section">
      <div id="BL--counter"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 d-flex justify-content-center flex-direction-column"
          >
            <div className="BL--hero-content">
              <h1 className="cursor-scale small">
              <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                    <motion.div ref={refOne} 
                   initial={{ y: "100%" }}
                      animate={{ y: isInViewOne? "0%" : "100%" }}>
                    Insights {" "}
                  </motion.div>
                  </div>
                  
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3 }}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                    <motion.div  ref={refTwo} 
                  initial={{ y: "100%" }} animate={{ y: isInViewTwo? "0%" : "100%" }}>
                    That {" "}
                  </motion.div>
                  </div>
                
                </MotionConfig>
                <MotionConfig transition={{ duration: 0.7, delay: 0.3}}>
                  <div style={{overflowY: "hidden", display: "inline-block"}}>
                  <motion.div  ref={refThree}
                 initial={{ y: "100%" }}
                  animate={{ y: isInViewThree? "0%" : "100%"  }}>
                   Pay
                  </motion.div>
                  </div>
          
                </MotionConfig>
              </h1>
              <p style={{marginRight: '0px'}}>Use your data to understand your value. Secure cash payments instantly & globally.</p>
              
             
            </div>
          </div>
          <div className="col-lg-7">
            <div className="BL--musicians-hero2-right">
              <img src="/images/musicians/hero-section-2.png" alt="hero" />
            </div>
          
          </div>
        </div>

        <div
          className="BL--musicians-hero2-shape2"
        >
            <img src="/images/musicians/shape-hero2.png" alt="shape" />
        </div>
        <div
          className="BL--musicians-hero2-shape3"
        >
            <img src="/images/musicians/blob.png" alt="shape" />
        </div>
      </div>
	
    </div>
  );
}
