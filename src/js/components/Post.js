import React from 'react'

class Post extends React.Component {

  constructor() {
    super()
    this.state = {message: 'ey'}
  }

  componentDidMount() {
    var id = this.props.params.id
    this.setState({ message: id })
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() { 

    return (
      <div className="post">
        Post
        <span>{this.state.message}</span>
      </div>
    );

  }
}

module.exports = Post