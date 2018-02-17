import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';
import heroImage from './../assets/images/hero.jpg';

const Hero = props => (
  <div
    className="hero jumbotron d-flex align-items-center mb-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${heroImage})`
    }}
  >
    <div className="container animated fadeInUp">
      <div className="row d-flex align-items-center">
        <div className="col-lg-8 mb-3 animated">
          <h1 className="display-4 text-white" style={{ letterSpacing: '-0.2rem' }}>
            Web design done right.
          </h1>
          <p className="lead text-white">
            We <strong>take pride in delivering</strong> high-quality work at low cost for small and mid-size businesses
            to better reach out to their customers through technology.
            <br />
            We build websites that will ignite your business!
          </p>
          <a href="" className="btn btn-secondary btn-lg btn-block w-50 mw-100">
            Get Started
          </a>
        </div>
        {/* <div className="col-md-6 col-lg-4 animated">
          <div className="card">
            <div className="card-body">
              <form action="" className="form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                  <textarea className="form-control" placeholder="Message" />
                </div>

                <div className="form-group">
                  <button className="btn btn-block btn-warning">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

Hero.propTypes = {};

export default Hero;
