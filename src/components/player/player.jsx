import React, {useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import {filmPropType} from '../../props';

const Player = ({film, isPlaying}) => {
  const videoRef = useRef();
  const timerRef = useRef(null);

  let muted = true;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        videoRef.current.play();
        return;
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      videoRef.current.pause();
    };

  }, [isPlaying]);

  return (
    <div className="player">
      <video src={film.video_link} className="player__video" poster={film.poster_image} ref={videoRef} muted={muted}></video>
    </div>
  );
};

Player.propTypes = {
  film: filmPropType,
  isPlaying: PropTypes.bool
};

export default Player;
