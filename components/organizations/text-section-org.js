/* eslint-disable @next/next/no-img-element */

import NewsLetterOrg from "./newsletter-org";
import { MotionConfig, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TextSectionOrg() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const isInViewOne = useInView(refOne);
  const isInViewTwo = useInView(refTwo);
  const isInViewThree = useInView(refThree);
  const isInViewFour = useInView(refFour);

  return (
    <>
      <div className="BL-background-dark">
        <div className="BL-text-section-org container-fluid">
          <div className="container">
            <div className="BL-text">
              <motion.div
                ref={refOne}
                className="BL-text-one"
                style={{
                  transform: isInViewOne ? "none" : "translateY(200px)",
                  opacity: isInViewOne ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <p>Organisations</p>
              </motion.div>
              <motion.div
                ref={refTwo}
                className="BL-text-two"
                style={{
                  transform: isInViewTwo ? "none" : "translateY(200px)",
                  opacity: isInViewTwo ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <p>Record Labels</p>
              </motion.div>
              <motion.div
                ref={refThree}
                className="BL-text-three"
                style={{
                  transform: isInViewThree ? "none" : "translateY(200px)",
                  opacity: isInViewThree ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <p>Distributors</p>
              </motion.div>
              <motion.div
                ref={refFour}
                className="BL-text-four"
                style={{
                  transform: isInViewFour ? "none" : "translateY(200px)",
                  opacity: isInViewFour ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <p>Publishers</p>
              </motion.div>
            </div>
            <div className="BL-text-para">
              <div className="BL-text-para-text">
                sign up for early access on
              </div>
              <h3>Black Lion’s Valuation Engine</h3>
            </div>
          </div>
          <NewsLetterOrg />
        </div>
      </div>
    </>
  );
}
