import React from 'react'
let { RouteHandler, Link } = require('react-router')

export default class Preview extends React.Component {
  
  render() {

    return (

      <div className="section post">
        <div className="container">
          <h3 className="title">{this.props.title}</h3>
          <p className="extract">{this.props.extract}</p>      
          
          <Link className="button button-primary" 
                to='post' 
                params={ { title: this.props.title } }>
            more
          </Link>
  
        </div>
      </div>

    );
  }
}

/*
import PostContent from "./content";
import TagsList from "./tags";

      <section className="page preview">
        <PostDate date={page.createdAt}/>

        <h2>{page.title}</h2>

        <PostContent body={page.extract} />

        <a href={page.path}>Keep reading -&gt;</a>
        <TagsList tags={page.tags} />
      </section>
*/