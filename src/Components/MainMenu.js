import React from 'react'
import '../Styles/MainMenu.css'; 
import { Banner } from './Banner';
import { AudioList } from './AudioList';
import { useEffect } from 'react';


function MainMenu() {
  useEffect(()=>{
    const all=document.querySelector('.menuList ul').querySelectorAll('li');

    function changeActive(){
        all.forEach((n)=>n.classList.remove('homeActive'));
        this.classList.add('homeActive');
    }

    all.forEach((n)=>n.addEventListener('click',changeActive));
}, []);
  
  return (
    <div className='MainMenu'>
        <Banner/>
        <div className='menuList'>
          <ul>
              <li >Home</li>
              <li >Discover</li>
              <li >Radio</li>
              <li >Artist</li>
              <li >Album</li>
              <li >Podcast</li>
          </ul>
        </div>
        <AudioList/>
    </div>
  )
}

export  {MainMenu}