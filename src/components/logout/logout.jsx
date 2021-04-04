import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {logout} from "../../store/api-actions";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <div className="user-page">
      <h1>Good bye!</h1>
    </div>
  );
};

export default Logout;
