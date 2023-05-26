/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function SocialSection() {
  return (
        <>
        <div className="BL-social-section">
            <div className="container">
                <div className="BL-social-top">
                    <div className="BL-social-default-content rt-mb-48">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							PROUDLY INTEGRATED WITH
						</p>
                    </div>
                    <div className="BL-social-icons">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="row">
                                
                                <div className="col">
                                    <Link href={"#"}>
                                    <img src="/images/socialmedia/spotify.png" alt="spotify" />
                                    </Link>               
                                </div>
                                <div className="col">
                                    <Link href={"#"}>
                                    <img src="/images/socialmedia/applemusic.png" alt="applemusic" />
                                    </Link>               
                                </div>
                                <div className="col">
                                    <Link href={"#"}>
                                    <img src="/images/socialmedia/youtube.png" alt="spotify" />
                                    </Link>               
                                </div>
                                <div className="col">
                                    <Link href={"#"}>
                                    <img src="/images/socialmedia/tiktok.png" alt="tiktok" />
                                    </Link>               
                                </div>
                                <div className="col">
                                    <Link href={"#"}>
                                    <img width="60px" src="/images/socialmedia/soundcloud.png" alt="soundcloud" />
                                    </Link>               
                                </div>
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
