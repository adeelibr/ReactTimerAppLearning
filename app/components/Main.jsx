import React from 'react';
import Navigation from './Navigation';

let Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <h3>Main.jsx rendered</h3>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
