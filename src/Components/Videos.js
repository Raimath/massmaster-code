import videos from "../Json/videos"

export const Videos = () => {
  const allVideos = videos
  console.log(allVideos)
  return (
    <>
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
      </div>
    </>
  )
}
