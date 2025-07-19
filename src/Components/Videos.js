import { useLocation } from "react-router-dom";
import videos from "../Json/videos"
import { useEffect } from "react";

export const Videos = () => {
  const allVideos = videos

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location]);

  
  return (
    <>
      <div className='photo-type'>
        <h3>Videos</h3>
      </div>
      <div className='section videos-section'>
        <div className='container videos-container flex'>
          <div className='video-container flex'>

            {
              allVideos.map((curVideo, id) => {

                return (
                  <div className='video-box flex' key={curVideo.id || id}>
                    <iframe src={curVideo.url}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>
                    <div className='video-title'>{curVideo.title}</div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <p className="para-light">Note: Some videos can not able to play sometime However you can whatch them by clicking on them </p>
      </div>
    </>
  )
}
