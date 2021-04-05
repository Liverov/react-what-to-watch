import React, {useRef, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getProgressTime, getRunTime, getSeconds} from '../../utils';
import {DEFAULT_SECONDS} from "../../const";

const PlayerScreen = () => {
  const history = useHistory();

  const {filmData: {
    backgroundImage,
    videoLink,
    runTime,
  }} = useSelector((state) => state.FILM_DATA.film);

  const [play, setPlay] = useState({
    playing: false,
    time: getRunTime(runTime),
    progressTime: 0,
    secondsAgo: DEFAULT_SECONDS
  });

  const playerRef = useRef();
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      playerRef.current.load();
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, []);

  const onPlayButton = () => {
    setPlay({
      ...play,
      playing: !play.playing
    });
    if (!play.playing) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  };

  const onPauseHandle = () => {
    clearTimeout(timerRef.current);
  };

  const onPlayHandle = () => {
    let seconds = DEFAULT_SECONDS;
    timerRef.current = setInterval(() => {
      let minutes = Math.floor(playerRef.current.currentTime / DEFAULT_SECONDS);
      let runTimeNow = runTime - minutes;

      seconds = getSeconds(seconds);

      setPlay({
        ...play,
        time: getRunTime(runTimeNow),
        progressTime: getProgressTime(playerRef.current.currentTime, runTime),
        secondsAgo: seconds
      });
    }, 1000);
  };

  const onOpenFullscreen = () => {
    if (playerRef.current.requestFullscreen) {
      playerRef.current.requestFullscreen();
    } else if (playerRef.current.webkitRequestFullscreen) { /* Safari */
      playerRef.current.webkitRequestFullscreen();
    } else if (playerRef.current.msRequestFullscreen) { /* IE11 */
      playerRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        ref={playerRef}
        onPlay={onPlayHandle}
        onPause={onPauseHandle}
      ></video>

      <button onClick={() => history.goBack()} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={play.timeElapsed}
              max="100"
            ></progress>
            <div className="player__toggler" style={{left: `${play.progressTime}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${play.time}:${play.secondsAgo}`}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButton}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={play.playing ? `#pause` : `#play-s`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onOpenFullscreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerScreen;
