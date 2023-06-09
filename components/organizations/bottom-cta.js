/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import { MotionConfig, motion, useInView } from "framer-motion";

export default function OrganizationsCTA() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const isInViewOne = useInView(refOne);
  const isInViewTwo = useInView(refTwo);
  const isInViewThree = useInView(refThree);
  const isInViewFour = useInView(refFour);
  const isInViewFive = useInView(refFive);

  return (
    <>
      <div className="BL-social-section BL-org-cta">
        <div className="container">
          <div className="rt-spacer-100"></div>
          <div className="rt-spacer-100"></div>
          <MotionConfig transition={{ duration: 1 }}>
            <div className="BL--org-cta">
              <motion.h4
                ref={refOne}
                className="heading"
                initial={{ y: "30%" }}
                animate={{
                  opacity: isInViewOne ? 1 : 0,
                  y: isInViewOne ? "0%" : "30%",
                }}
              >
                LET US AID WITH
              </motion.h4>
              <motion.h3 ref={refTwo}  initial={{ y: "30%" }}
                animate={{
                  opacity: isInViewTwo ? 1 : 0,
                  y: isInViewTwo ? "0%" : "30%",
                }} className="heading f-size-50 ballpen">
                <img
                  src="/images/organizations/greencheck.png"
                  alt="greencheck"
                />{" "}
                More deal making
              </motion.h3>
              <motion.h3 ref={refThree} initial={{ y: "30%" }}
                animate={{
                  opacity: isInViewThree ? 1 : 0,
                  y: isInViewThree ? "0%" : "30%",
                }} className="heading f-size-50 clock">
                <img
                  src="/images/organizations/greencheck.png"
                  alt="greencheck"
                />{" "}
                Saving time & resources
              </motion.h3>
              <motion.h3 ref={refFour} initial={{ y: "30%" }}
                animate={{
                  opacity: isInViewFour ? 1 : 0,
                  y: isInViewFour ? "0%" : "30%",
                }} className="heading f-size-50 piggybank">
                <img
                  src="/images/organizations/greencheck.png"
                  alt="greencheck"
                />{" "}
                Maximizing revenue
              </motion.h3>
              <div className="rt-spacer-100"></div>
              <motion.div ref={refFive} initial={{ y: "30%" }}
                animate={{
                  opacity: isInViewFive ? 1 : 0,
                  y: isInViewFive ? "0%" : "30%",
                }} className="BL--hero-btn">
                <Link href={"#"} legacyBehavior>
                  <motion.a
                    className="BL--btn bg-gray active"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    GET EARLY ACCESS!
                  </motion.a>
                </Link>
              </motion.div>
            </div>
          </MotionConfig>
        </div>
      </div>
    </>
  );
}
