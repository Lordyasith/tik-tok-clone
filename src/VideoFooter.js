import React from 'react'
import './VideoFooter.css'
import disk from'./disk.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'


function VideoFooter({channel,description,song}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter_ticker'>
        <MusicNoteIcon className='videoFooter_icon'/>
        <Ticker className='ticker' mode='smooth'>
          {({index})=>(
            <>
            <p>{song}</p>
            </>
          )
            
          }
        </Ticker>
        </div>
        
        
      </div>
      <img src={disk} className='videoFooter__record'/>
    </div>
  )
}

export default VideoFooter