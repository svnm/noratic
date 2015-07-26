import React from 'react'

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return(

      <div className="section header">
        <a href='/'>
        <div className="container">
          <div className="row">
            <div className="column">
              <h2 className="title">noratic</h2>
              <h3 className="description">react node webpack static site generator.</h3>
            </div>
          </div>
        </div>
        </a>
      </div>

    )
  }

}
