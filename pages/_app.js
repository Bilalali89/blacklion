import "bootstrap/dist/css/bootstrap.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Head from "next/head";
import { useLayoutEffect } from "react";
import "slick-carousel/slick/slick.css";
import Preloader from "../components/common/preloader/preloader";
import ScrollTop from "../components/common/scroll-top";
import Layout from "../components/layout";
import "../styles/css/animate.css";
import "../styles/css/app.css";
import "../styles/css/main.css";


gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  useLayoutEffect(() => {
    let cursor = document.querySelector(".cursor");
    let cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });
  });

  return (
    <>
      <Head>
        {/* common title */}
        <title>Blacklion</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ScrollTop />
      <Preloader />
    </>
  );
}

export default MyApp;
