import React from 'react'
import posts from '../posts'
import Content from './Content'

class Post extends React.Component {

  constructor() {
    super()
    let post = {id: '', title: '', extract: ''}
    this.state = { post: post}
  }

  componentDidMount() {
    let post = {}

    for(let i = 0; i < posts.length; i++){
      if(posts[i].title == this.props.params.title){        
        this.setState({ post: posts[i] })
      }
    }
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() { 

    return (
      <div className="post">
        <Content title={this.state.post.title} 
              id={this.state.post.id} 
              extract={this.state.post.extract} />
      </div>
    );

  }
}

module.exports = Post