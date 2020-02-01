import React from 'react';

const LIGHT = require('./images/logo.png');

export default function Logo(props) {
  const logo = LIGHT;
  return (
    <div
      className="logo"
    >
      {/* <a href="/" style={{ display: 'block', position: 'relative' }}> */}
      <img src={logo} height="90" alt="logo" />
      {/* </a> */}
    </div>
  );
}
