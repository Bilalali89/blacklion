/* eslint-disable @next/next/no-img-element */
import { MotionConfig, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const HeroSectionSteps = (props) => {

  let { backgroundColor } = props;
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const isInViewOne = useInView(refOne);
  const isInViewTwo = useInView(refTwo);
  const isInViewThree = useInView(refThree);
  const isInViewFour = useInView(refFour);

  //   useEffect(() => {
  //     console.log("Element is in view: ", isInView)
  //   }, [isInView])

  return (
    <div
      className="BL--home-steps-section"
      style={{ background: `${backgroundColor}` }}
    >
      <div className="container">
        <div className="row b1">
          <div className="col-xl-6">
           
              <motion.div
                ref={refOne}
                style={{
                  transform: isInViewOne ? "none" : "translateX(-200px)",
                  opacity: isInViewOne ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="BL-step step-one"
              >
                <div className="step">STEP ONE</div>
                <div className="heading">Identify</div>
                <div className="desc">emerging musicians, data and trends</div>
              </motion.div>
           
          </div>
        </div>
        <div className="row b2">
          <div className="col-xl-6 offset-xl-2">
           
              <motion.div
                ref={refTwo}
                style={{
                  transform: isInViewTwo ? "none" : "translateX(-200px)",
                  opacity: isInViewTwo ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="BL-step step-two"
              >
                <div className="step">STEP TWO</div>
                <div className="heading">Evaluate</div>
                <div className="desc">musical assets</div>
              </motion.div>
           
          </div>
        </div>
        <div className="row b3">
          <div className="col-xl-6 offset-xl-4">
          
              <motion.div
                ref={refThree}
                style={{
                  transform: isInViewThree ? "none" : "translateX(-200px)",
                  opacity: isInViewThree ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="BL-step step-three"
              >
                <div className="step">STEP THREE</div>
                <div className="heading">Sign</div>
                <div className="desc">automated contracts</div>
              </motion.div>
           
          </div>
        </div>
        <div className="row b4">
          <div className="col-xl-6 offset-xl-6">
          
             
                <motion.div
                  ref={refFour}
                  style={{
                    transform: isInViewFour ? "none" : "translateX(-200px)",
                    opacity: isInViewFour ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                  className="BL-step step-four"
                >
                  <div className="step">STEP FOUR</div>
                  <div className="heading">Pay</div>
                  <div className="desc">secure payments globally</div>
                </motion.div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSteps;
