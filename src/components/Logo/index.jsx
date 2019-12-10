import React from 'react';

const LIGHT = require('./images/logo.png');

export default function Logo(props) {
  const logo = LIGHT;
  return (
    <div
      className="logo"
      style={{
        height: 48,
        color: '#f40',
        textAlign: 'left',
        marginLeft: '24%'
      }}
    >
      {/* <a href="/" style={{ display: 'block', position: 'relative' }}> */}
      <img src={logo} width="198" height="153" alt="logo" />
      {/* </a> */}
    </div>
  );
}
