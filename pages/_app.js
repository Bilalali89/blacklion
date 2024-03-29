import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Preloader from "../components/common/preloader/preloader";
import ScrollTop from "../components/common/scroll-top";
import Layout from "../components/layout";
import "../styles/css/animate.css";
import "../styles/css/app.css";
import "../styles/css/main.css";


function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx= gsap.context(() => {
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
  return () => ctx.revert(); 
}, []);

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
