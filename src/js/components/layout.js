import React from 'react/addons'

// components
import Header from './Header'
import Footer from './Footer'

let TransitionGroup = React.addons.CSSTransitionGroup;
let { RouteHandler, Link } = require('react-router')

class Layout extends React.Component {

  constructor() {
    super()
    this.state = {};
  }

  render() {

    return (

      <div id="main">

        <Header />

        <div className="content">

          <TransitionGroup component="div" transitionName="page-transition">
            <RouteHandler {...this.props} />
          </TransitionGroup>
          {/* child routes show up here */}
        </div>

        <Footer />

      </div>

    );
  }

}


module.exports = Layout