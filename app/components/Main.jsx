import React from 'react';
import Navigation from './Navigation';

let Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
      <div>
        {props.children}
      </div>
      </div>
    </div>
  );
};

export default Main;
