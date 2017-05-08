import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM, { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Products from './Products'

const App = () => (
  <div>
    <nav>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
    <div>
      <Content />
    </div>
  </div>
)

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Company = () => (
  <div>
    <h1>company</h1>
  </div>
)

const Blog = () => (
  <div>
    <h1>Blog</h1>
  </div>
)

const Content = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='/products' component={Products} />
    <Route path='/company' component={Company} />
    <Route path='/blog' component={Blog} />
  </Switch>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
