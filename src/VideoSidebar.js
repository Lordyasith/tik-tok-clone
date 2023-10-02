import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoSidebar({likes,shares,messages}) {
    const [Liked,setLiked]=useState(false)
    

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_button'>
            {Liked?(
                <FavoriteIcon onClick={e=>setLiked(false)}/>
            ):(<FavoriteBorderIcon onClick={e=>setLiked(true)}/>
            )}
            
            <p>{Liked?likes+1:likes}</p>
        </div>
        <div className='videoSidebar_button'>
            <CommentOutlinedIcon/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar_button'>
            <ShareOutlinedIcon />
            <p>{shares}</p>
        </div>
        
    </div>
  )
}

export default VideoSidebar