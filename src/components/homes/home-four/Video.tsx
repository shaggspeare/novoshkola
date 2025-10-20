import { useState } from "react";
import VideoPopup from "../../../modals/VideoPopup";

const Video = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="video__area">
        <div
          className="video__bg"
          style={{ backgroundImage: `url(/assets/img/bg/h4_video_bg.jpg)` }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="video__play-btn">
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="popup-video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="video__content">
                <h2 className="title">Find Harmony in Body and Mind</h2>
                <p>
                  Through research and discovery, we are changing the world. Groove’s
                  intuitive shared steam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="b2Az7_lLh3g"
      />
    </>
  );
};

export default Video;
