import React from 'react';

const Wrapper = props => (
  <div
    className={`container${props.animated ? ' animated fadeIn' : ''}`}
    style={{ marginTop: '6rem', marginBottom: '6rem' }}
  >
    {props.children}
  </div>
);

export default Wrapper;
