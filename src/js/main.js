import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Layout from './components/Layout'
import Post from './components/Post'
import Home from './components/Home'


let routes = (  
  <Route name='layout' path='/' handler={Layout}>
  	<DefaultRoute name='home' handler={Home} />
    <Route name='post' path='/post/:id?' handler={Post} />
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.getElementById('app'));
});