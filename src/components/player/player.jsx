import React, {useRef, useEffect} from 'react';
import PropTypes from "prop-types";
import {filmPropType} from '../../types';

const Player = ({film, isPlaying, isMuted = true, isPreviewVideo = false}) => {
  const {
    previewVideoLink,
    videoLink,
    posterImage
  } = film;

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
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };

  }, [isPlaying]);

  return <video
    src={isPreviewVideo ?
      previewVideoLink :
      videoLink
    }
    className="player__video"
    poster={posterImage}
    ref={videoRef} muted={isMuted}
  >
  </video>;
};

Player.propTypes = {
  film: filmPropType,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  isPreviewVideo: PropTypes.bool
};

export default Player;
