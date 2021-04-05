import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const";

const Avatar = () => (
  <Link to={AppRoutes.MY_LIST} className="user-block">
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  </Link>
);

export default Avatar;
