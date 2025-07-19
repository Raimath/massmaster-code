import { useLocation } from "react-router-dom";
import ads from "../Json/ads"
import { useEffect } from "react";

export const Ads = () => {
  const allAds=ads

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
        <h3>Ads</h3>
      </div>
      <div className='section videos-section'>
        <div className='container videos-container flex'>
          <div className='video-container flex'>

            {
              allAds.map((curAd, id) => {
                
                return (
                  <div className='video-box flex' key={curAd.id || id}>
                    <iframe src={curAd.url}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>
                    <div className='video-title'>{curAd.title}</div>
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
