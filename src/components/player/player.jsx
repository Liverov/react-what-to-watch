import React, {useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import {filmPropType} from '../../props';

const Player = ({film, isPlaying, isMuted = true}) => {
  const videoRef = useRef();
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        return videoRef.current.play();
      }, 1000);
    }
    return () => {
      videoRef.current.load();
      clearInterval(timerRef.current);
      timerRef.current = null;
    };

  }, [isPlaying]);

  return <video src={film.videoLink} className="player__video" poster={film.posterImage} ref={videoRef} muted={isMuted}></video>;
};

Player.propTypes = {
  film: filmPropType,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool
};

export default Player;
