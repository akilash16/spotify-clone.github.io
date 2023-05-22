import React from 'react'
import BannerBg from '../img/image10.jpg'
import Verify from '../img/verify.png'
import {BsSpotify} from 'react-icons/bs';
import { FollowButton } from './FollowButton';
import {BiHeadphone} from 'react-icons/bi';
import { CountLikes } from './CountLikes';


function Banner() {
  return (
    <div className='Banner'>
        <img src={BannerBg}></img>
        <i className='logoSpotify'><BsSpotify /></i>
        <p className='logoText'>Chillify</p>
        <p className='tagName'>/ Playlist</p>
        <p className='title'>Top hits 2023
        </p>
        <img className='verifyimg' src={Verify}></img>
        <span className='subTitle'>Tune into the Hottest tracks of Kollywood! Cover : Vaathi
</span>
        <span className='count'> 
          <i className='iconViewers'><BiHeadphone /></i>
           <p className='viewers'>11,344,345</p>
           <p className='usersCount'>Monthly Users</p>

        </span>
        
        <FollowButton/>
        <CountLikes />
        <div className='bottomLayer'>
    </div>
    </div>
  )
 
}

export  {Banner}