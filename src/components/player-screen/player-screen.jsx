import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {filmsPropType} from '../../types';
import {getNormalizeTime} from '../../utils/utils';

import films from '../../mocks/films';

const PlayerScreen = () => {
  const {id} = useParams();
  const history = useHistory();
  const [film, setFilm] = useState({});

  const {
    posterImage,
    videoLink,
    runTime,
  } = film;

  useEffect(() => {
    setFilm(films[id]);
  }, []);

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage}></video>

      <button onClick={() => history.goBack()} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getNormalizeTime(runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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

PlayerScreen.propTypes = {
  films: filmsPropType
};

export default PlayerScreen;
