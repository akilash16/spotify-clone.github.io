import React from 'react'
import image2 from '../img/image4.jpg';
import {BsFillVolumeUpFill,BsMusicNoteList} from 'react-icons/bs';
import {TbDeviceDesktop} from 'react-icons/tb';

function TrackList() {
  return (
    <div className='trackList'>
        <div className='topTrack'>
            <img src={image2} alt=''></img>
            <p>Track 1<span>Artist</span></p>
        </div>
        <div className='bottomTrack'>
        <i><BsFillVolumeUpFill /></i>
            <input type='range'></input>
            <i><BsMusicNoteList /></i>
            <i><TbDeviceDesktop /></i>
        </div>
    </div>
  )
}

export  {TrackList}