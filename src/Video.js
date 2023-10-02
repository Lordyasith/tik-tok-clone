import React, { useRef, useState } from 'react'
import './Video.css'
import tik from './tik.mp4'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares

}) {
  const [play,setPlay]=useState(false)

  const videoRef=useRef(null);
  const onVideoPress=()=>{
    if(play){
      videoRef.current.play();
      setPlay(false)
    }
    else{
      videoRef.current.pause();
      setPlay(true)
    }
    

  }
  

  return (
    <div className='video'>
        
        <video className='video__player' ref={videoRef} onClick={onVideoPress}src={url} loop></video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>

    </div>
  )
}

export default Video;