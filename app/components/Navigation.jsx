import React from 'react';
import  { IndexLink, Link } from 'react-router';

let Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink to="/" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink></li>
          <li><Link to="/countdown" activeStyle={{ fontWeight: 'bold' }}>Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created By <a href="https://github.com/adeelibr" target="_blank">Adeel Imran</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
