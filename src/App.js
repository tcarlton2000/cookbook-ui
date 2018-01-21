import React, { Component } from 'react'
import './App.css'
import Recipes from './Recipes.js'

class App extends Component {
  render () {
    return (
      <div className="container">
        <Recipes/>
      </div>
    )
  }
}

export default App
