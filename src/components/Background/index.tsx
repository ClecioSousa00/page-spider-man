'use client'
export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1]  h-screen w-full after:fixed after:inset-0  after:h-screen after:w-screen  after:bg-shadow after:content-['']">
      <video loop autoPlay muted className="h-full w-full object-cover">
        <source
          src={require('../../assets/video/Background_video.mp4')}
          type="video/mp4"
        />
      </video>
    </div>
  )
}
