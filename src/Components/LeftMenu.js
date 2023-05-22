import React from 'react'
import '../Styles/LeftMenu.css';
import {FaSpotify,FaEllipsisH} from 'react-icons/fa';
import {BsSearchHeartFill} from 'react-icons/bs';
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlaylist } from './MenuPlaylist';
import { TrackList } from './TrackList';


function LeftMenu() {
  return (
    <div className='leftmenu'>
      <div className='logoContainer'>
        <i className='spotify'>
          <FaSpotify />
        </i>
        <h2>Chillify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
          <input type='text' placeholder='Search..'></input>
          <i className='searchIcon'>
              <BsSearchHeartFill />
          </i>
        </div>
      <Menu title={'Menu'} menuObject={MenuList}/>
      <MenuPlaylist/>
      <div className='tracklist'>
        <TrackList />
      </div>
      
    </div>
  )
}

export  {LeftMenu};