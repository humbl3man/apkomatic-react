import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer className="bg-white" style={{ boxShadow: '0 -10px 30px rgba(0,0,0,.05)', padding: '1.5rem 0 2rem 0' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">Apkomatic, All Rights Reserved 2017</div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
