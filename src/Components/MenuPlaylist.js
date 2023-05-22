import React from 'react'
import {MdAdd} from 'react-icons/md';
import { playList } from './Playlist';
import {BsMusicNoteList,BsTrash} from 'react-icons/bs';

function MenuPlaylist() {
  return (
    <div className='playlistContainer'>
            <div className='nameContainer'>
                <p>Playlist</p>
                <i><MdAdd /></i>
            </div>
            <div className='playlistScroll'>
              {
                playList&&playList.map((list)=>(
                  <div className='playlist' key={list.id}>
                  <i className='list'>
                  <BsMusicNoteList />
                  </i>
                  <a href={list.link}>
                  <p>{list.name}</p>
                  </a>
                  <i className='trash'>
                  <BsTrash />
                  </i>
                </div>
                ))
              }
                
            </div>
    </div>
    

    )
}

export  {MenuPlaylist}