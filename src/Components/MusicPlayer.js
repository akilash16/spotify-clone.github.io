import React, { useState,useRef, useEffect } from 'react'
import '../Styles/MusicPlayer.css'
import {AiFillPauseCircle,AiOutlineShareAlt,AiFillBackward,AiFillForward,AiFillStepForward,AiFillPlayCircle,AiFillStepBackward,AiOutlineDownload,AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function MusicPlayer({song,imgSrc,auto }) {
    const [isLove, setLove] = useState(false);
  const [isPause, setPause] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePause = () => {
    const prevValue = isPause;
    setPause(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeLove = () => {
    setLove(!isLove);
  };


  return (
    <div className='MusicPlayer'>
        <div className='songImage'>
            <img src={imgSrc} alt=''></img>
        </div>
        <div className='songAttribute'>
            <audio src={song} preload='metadata' ref={audioPlayer} />
                <div className='top'>
                    <div className='left'>
                        <div className='loved' onClick={changeLove}>
                        {isLove ? (<i><AiOutlineHeart /></i>):(<i><AiFillHeart /></i>)}
                        </div>
                        <div className='download'>
                            <i><AiOutlineDownload /></i>
                        </div>
                    </div>
                    <div className='middle'>
                        <div className='back'>
                            <i><AiFillBackward /></i>
                            <i><AiFillStepBackward /></i>
                        </div>
                        <div className='pausePlay' onClick={changePause}>
                            {
                                isPause?(<i className='pause'> 
                                    <AiFillPauseCircle />
                                    </i> ):(<i className='play'>
                            <AiFillPlayCircle />
                            </i>)
                            }
                        </div>
                        <div className='forward'>
                            <i>
                            <AiFillForward/>
                            </i>
                        <i>
                        <AiFillStepForward />
                        </i>
                        </div>
                    </div>
                    <div className='right'>
                        <i><AiOutlineShareAlt /></i>
                    </div>
                    
                </div>
                <div className='bottom'>
                    <div className='currentTime'>{calculateTime(currentTime)}

                    </div>
                    <input type='range' className='progressBar' ref={progressBar} defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}/>
                    <div className='duration'>{duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}

                    </div>
                </div>
            
        </div>
    </div>
  )
}

export  {MusicPlayer}