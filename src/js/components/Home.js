import React from 'react'

import Preview from './Preview'
import posts from '../posts'

class Home extends React.Component {

  constructor() {
    super()
    this.state = { posts: posts  }
  }

  render() {

    let previewList = this.state.posts.map( (p, i) => {

      return (
            <Preview title={p.title} id={p.id} extract={p.extract} />
      );

    });

    return (

      <div id="home">        
        { previewList }
      </div>

    )

  }

}

module.exports = Home