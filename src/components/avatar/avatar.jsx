import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const";
import {useSelector} from "react-redux";
import {getUserSelector} from "../../store/user/selectors";

const Avatar = () => {
  const {user} = useSelector(getUserSelector);
  const {avatarUrl, email} = user;
  return (
    <Link to={AppRoutes.MY_LIST} className="user-block" style={{display: `flex`, alignItems: `center`}}>
      <div style={{marginRight: `20px`, color: `#eee5b5`, textDecoration: `none`}}>
        {email}
      </div>
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
    </Link>
  );
};

export default Avatar;
