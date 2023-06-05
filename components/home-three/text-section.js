/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NewsLetter from "./news-letter";

export default function TextSection() {
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
        <div className="BL-text-section container-fluid">
          <div className="container">
            <div className="BL-text">
              <motion.div ref={refOne} className="BL-text-one"
               style={{
                transform: isInViewOne ? "none" : "translateY(200px)",
                opacity: isInViewOne ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
                <p>Musicians</p>
              </motion.div>
              <motion.div ref={refTwo} className="BL-text-two"
               style={{
                transform: isInViewTwo ? "none" : "translateY(200px)",
                opacity: isInViewTwo ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
                <p>Organisations</p>
              </motion.div>
              <motion.div ref={refThree} className="BL-text-three"
               style={{
                transform: isInViewThree ? "none" : "translateY(200px)",
                opacity: isInViewThree ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
                <p>Investors</p>
              </motion.div>
              <motion.div ref={refFour} className="BL-text-four"
               style={{
                transform: isInViewFour ? "none" : "translateY(200px)",
                opacity: isInViewFour ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
                <p>Creatives!</p>
              </motion.div>       
             
            </div>
            <div className="BL-text-para">
              <div className="BL-text-para-text">We invite you to</div>
              <h3>join the revolution</h3>
            </div>
            <div className="BL--newsletter-shape">
              <img src="/images/home/newsletter-shape.png" alt="shape" />
            </div>
          </div>
          <NewsLetter />
        </div>
      </div>
    </>
  );
}
