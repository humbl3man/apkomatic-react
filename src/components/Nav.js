import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = props => (
  <nav id="top-nav" className="top-nav navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#20232a' }}>
    <div className="container">
      <NavLink className="navbar-brand" exact to="/">
        Apkomatic
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={props.toggleNav}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={`navbar-collapse${!props.navOpen ? ' collapse' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" onClick={props.closeNav}>
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item" onClick={props.closeNav}>
            <NavLink className="nav-link" activeClassName="active" to="/work">
              Work
            </NavLink>
          </li>
          <li className="nav-item" onClick={props.closeNav}>
            <NavLink className="nav-link" activeClassName="active" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item" onClick={props.closeNav}>
            <NavLink className="nav-link" activeClassName="active" to="/pricing">
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default Nav;
