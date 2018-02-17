import React from 'react';
import designImage from './../assets/images/featured-design.jpg';
import devImage from './../assets/images/featured-dev.jpg';
import relationshipImage from './../assets/images/featured-relationship.jpg';

const Featured = () => (
  <div>
    <section className="bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3>We will design your ideas.</h3>
            <p className="lead">
              We recognize that good design is very important as it visually communicates with your users and customers.
              We take it seriously. Whether you are a small business looking for a simple website to promote your
              services or mid-size organization looking to refresh your website look or add new features - we got you
              covered.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={designImage} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={devImage} className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h3>We will bring your ideas to life.</h3>
            <p className="lead">
              Beautiful and meaningful design is important, but so is good performance. A slow and unresponsive website
              is only going to scare users away. We strive to build fast websites that your users are going to love. All
              our websites are optimized for mobile use.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3>We nurture business relationships</h3>
            <p className="lead">
              We truly care about our customers and that{`'`}s why our work is not done after we build your product. We
              will keep in touch with you if you need help maintaining your website or web application. We value your
              time and business.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={relationshipImage} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Featured;
