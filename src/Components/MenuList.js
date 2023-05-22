import React from 'react'
import {HiOutlineHome,HiOutlineMicrophone} from 'react-icons/hi';
import {FiRadio} from 'react-icons/fi';
import {BsSoundwave,BsJournalBookmarkFill} from 'react-icons/bs';
import {MdPodcasts} from 'react-icons/md';


const MenuList=[
    {
       id: 1,
       icon: <HiOutlineHome />,
       name: 'Home',
    },
    {
        id: 2,
        icon: <BsSoundwave />,
        name: 'Discover',
     },
     {
        id: 3,
        icon: <FiRadio />,
        name: 'Radio',
     },
     {
        id: 4,
        icon: <HiOutlineMicrophone />,
        name: 'Artist',
     },
     {
        id: 5,
        icon: <BsJournalBookmarkFill />,
        name: 'Album',
     },
     {
        id: 6,
        icon: <MdPodcasts />,
        name: 'Podcast',
     }
];

export {MenuList};

