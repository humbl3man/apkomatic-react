import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import { LandingPage, Services, Pricing, Work } from './containers';
import { Nav, Footer } from './components';

class App extends Component {

  state = {

    navOpen: false

  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  closeNav = () => {
    this.setState({
      navOpen: false
    })
  }

  componentDidMount() {
    AOS.init({
      duration: 800
    });
  }
  

  render() {
    return (
      <Router>
        <div id="apkomatic">
          <Nav navOpen={this.state.navOpen} toggleNav={this.toggleNav} closeNav={this.closeNav}/>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/pricing" component={Pricing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
