import React from 'react'

import Preview from './Preview'

class Post extends React.Component {

  constructor() {
    super()
    this.state = {message: 'ey'}
  }

  componentDidMount() {
    let post = {}
    post.id = this.props.params.id
    post.title = this.props.params.title
    post.extract = this.props.params.extract

    this.setState({ post: post })
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() { 

    return (
      <div className="post">
        <Preview title={this.state.title} 
                 id={this.state.id} 
                 extract={this.state.extract} />
      </div>
    );

  }
}

module.exports = Post