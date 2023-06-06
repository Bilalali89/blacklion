/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SocialSection() {
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
      <div className="BL-social-section">
        <div className="container">
          <div className="BL-social-top">
            <div className="BL-social-default-content rt-mb-48">
              <p>PROUDLY INTEGRATED WITH</p>
            </div>
            <div className="BL-social-icons">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="row">
                    <MotionConfig transition={{ duration: 2}}>
                      <motion.div
                        ref={refOne}
                        className="col"
                        initial={{ y: "60%" }}
                        animate={{
                          opacity: isInViewOne ? 1 : 0,
                          y: isInViewOne ? "0%" : "60%",
                        }}
                      >
                        <Link href={"#"}>
                          <img
                            src="/images/socialmedia/spotify.png"
                            alt="spotify"
                          />
                        </Link>
                      </motion.div>
                    </MotionConfig>

                    <MotionConfig transition={{ duration: 2}}>
                      <motion.div
                        ref={refTwo}
                        className="col"
                        initial={{ y: "60%" }}
                        animate={{
                          opacity: isInViewTwo ? 1 : 0,
                          y: isInViewTwo ? "0%" : "60%",
                        }}
                      >
                        <Link href={"#"}>
                          <img
                            src="/images/socialmedia/applemusic.png"
                            alt="applemusic"
                          />
                        </Link>
                      </motion.div>
                    </MotionConfig>

                    <MotionConfig transition={{ duration: 2 }}>
                      <motion.div
                        ref={refThree}
                        className="col"
                        initial={{ y: "60%" }}
                        animate={{
                          opacity: isInViewThree ? 1 : 0,
                          y: isInViewThree ? "0%" : "60%",
                        }}
                      >
                        <Link href={"#"}>
                          <img
                            src="/images/socialmedia/youtube.png"
                            alt="youtube"
                          />
                        </Link>
                      </motion.div>
                    </MotionConfig>

                    <MotionConfig transition={{ duration: 2 }}>
                      <motion.div
                        ref={refFour}
                        className="col"
                        initial={{ y: "60%" }}
                        animate={{
                          opacity: isInViewFour ? 1 : 0,
                          y: isInViewFour ? "0%" : "60%",
                        }}
                      >
                        <Link href={"#"}>
                          <img
                            src="/images/socialmedia/tiktok.png"
                            alt="tiktok"
                          />
                        </Link>
                      </motion.div>
                    </MotionConfig>

                    <MotionConfig transition={{ duration: 2}}>
                      <motion.div
                        ref={refFive}
                        className="col"
                        initial={{ y: "60%" }}
                        animate={{
                          opacity: isInViewFive ? 1 : 0,
                          y: isInViewFive ? "0%" : "60%",
                        }}
                      >
                        <Link href={"#"}>
                          <img
                            src="/images/socialmedia/soundcloud.png"
                            alt="soundcloud"
                          />
                        </Link>
                      </motion.div>
                    </MotionConfig>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
