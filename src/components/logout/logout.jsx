import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {logout} from "../../api-actions";
import PropTypes from "prop-types";

const Logout = ({onLogout}) => {
  useEffect(() => {
    onLogout();
  }, []);

  return (
    <div className="user-page">
      <h1>Good bye!</h1>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  }
});

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export {Logout};
export default connect(null, mapDispatchToProps)(Logout);
