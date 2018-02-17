import React from 'react';
import { Wrapper } from './../components/';

const Pricing = () => (
  <Wrapper animated>
    <h1>Pricing</h1>
    <p className="lead">
      <strong>
        We trully believe in honesty and transparency. <mark>Especially when it comes to pricing</mark>.
      </strong>
    </p>
    <p>
      We are very flexible when it comes to pricing. Whether you need something quick and simple or complicated we can
      work with your budget. You are the client and we will respect your budget restrictions. There are no hidden fees.
      The price and the scope of the project is discussed before initial design and development. Price is final with one
      exception: If you need to add a feature to your product (not previously discussed) we will discuss any additional
      fees with you to get a final sign-off from you. We promise you that we will not charge you any hidden fees (unless
      pre-approved by you).
    </p>

    <div className="row d-flex align-items-stretch mt-3 pt-3">
      {/* Basic */}
      <div className="col-lg-4 mb-3">
        <div className="card h-100">
          <div className="card-body bg-light">
            <h3>Bootstrap</h3>
            <p className="text-muted">Perfect for clean, light, and interactive websites.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Mobile Responsive</li>
            <li className="list-group-item">Custom Design</li>
            <li className="list-group-item">1-4 pages</li>
            <li className="list-group-item">Basic SEO</li>
          </ul>
        </div>
      </div>

      {/* Bootstrap  */}
      <div className="col-lg-4 mb-3">
        <div className="card h-100">
          <div className="card-body bg-light">
            <h3>Best Value</h3>
            <p className="text-muted">Perfect for more complicated websites with more content and rich interactions.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Interactive &amp; Responsive</li>
            <li className="list-group-item">Custom Design</li>
            <li className="list-group-item">5-10 pages</li>
            <li className="list-group-item">Social Media Integration</li>
          </ul>
        </div>
      </div>

      {/* Custom */}
      <div className="col-lg-4 mb-3">
        <div className="card h-100">
          <div className="card-body bg-light">
            <h3>Custom</h3>
            <p className="text-muted">Perfect for more complicated products, like e-commerce or web apps.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Interactive &amp; Responsive</li>
            <li className="list-group-item">Custom Design</li>
            <li className="list-group-item">SEO</li>
            <li className="list-group-item">Social Media Integration</li>
          </ul>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Pricing;
