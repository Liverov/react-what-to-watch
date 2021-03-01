import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Header = ({setClassName = ``, children}) => {
  return (
    <header className={`page-header ${setClassName}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  setClassName: PropTypes.string
};

export default Header;
