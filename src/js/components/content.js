import React from 'react'
import Markdown2HTML from 'react-markdown-to-html'

export default class Content extends React.Component {

  componentDidMount() {
  }
  
  render() {

    let markdown = null

    switch (this.props.title) {
        case "Install docker on Ubuntu AWS":
            markdown = <Markdown2HTML src="/public/posts-md/Install-docker-on-Ubuntu-AWS.md" />;
            break;
        case "JavaScript closures example":
            markdown = <Markdown2HTML src="/public/posts-md/JavaScript-closures-example.md" />;
            break;
        case "ES6 Promises":
            markdown = <Markdown2HTML src="/public/posts-md/ES6-Promises.md" />;
            break;
        case "Tape and Testling":
            markdown = <Markdown2HTML src="/public/posts-md/Tape-and-Testling.md" />;
            break;
    }

    return (

      <div className="section post">
        <div className="container">
          <h3 className="title">{this.props.title}</h3>

          { markdown }

        </div>
      </div>

    );
  }
}