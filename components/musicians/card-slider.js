/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MusicianCardSlider() {
  const comp = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const spacer = 0;
      let cards = gsap.utils.toArray(".cardd");
      console.log(cards[1]?.style.zIndex);
      gsap.fromTo(
        ".cardd:not(:first-child)",
        {
          x: () => window.innerWidth,
          rotate: 4,
        },
        {
          x: spacer,
          stagger: 0.7,
          rotate: 0,
          scrollTrigger: {
            pin: ".cardss",
            scrub: true,
            start: "top 20%",
            end: "bottom 20%",
            invalidateOnRefresh: false,
            markers: false,
          },
        }
      );
    }, comp);
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className="BL--musician--cardslider" ref={comp}>
      <div className="container">
        <div class="spacer"></div>

        <div className="slidebox cardss" >
          <div className="panel sl1 cardd">
            <img src="/images/musicians/slide.png" alt="slide" />
          </div>

          <div
            className="panel sl2 cardd"
            style={{ zIndex: "2", position: "absolute" }}
          >
            <img src="/images/musicians/slide-2.png" alt="slide" />
          </div>

          <div
            className="panel sl3 cardd"
            style={{ zIndex: "3", position: "absolute" }}
          >
            <img src="/images/musicians/slide-3.png" alt="slide" />
          </div>

          <div
            className="panel sl4 cardd"
            style={{ zIndex: "4", position: "absolute" }}
          >
            <img src="/images/musicians/slide-4.png" alt="slide" />
          </div>
        </div>
        <div className="rt-spacer-100"></div>
        <div className="rt-spacer-100"></div>
      </div>
    </div>
  );
}
