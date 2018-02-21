import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Recipes from './Recipes.js'
import Recipe from './Recipe.js'
import { Navbar } from 'react-bootstrap'

class App extends Component {
  navbar() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Cookbook</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
  render() {
    return (
      <Router>
        <div>
          {this.navbar()}
          <div className="container">
            <Route exact path='/' component={Recipes}/>
            <Route path='/recipes/:recipeId' component={Recipe}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
