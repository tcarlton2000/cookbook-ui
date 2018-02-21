// @ts-check
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

require('./mockResponses')

export default class Recipe extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.getRecipe('/recipes/' + this.props.match.params.recipeId)
  }

  getRecipe(link) {
    return fetch(link)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(responseJson => {
        this.setState({
          loading: false,
          recipe: responseJson
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({
          loading: false,
          error: error.message
        })
      })
  }

  recipeView() {
    return (
      <div>
        <h1 className='page-header center'>{this.state.recipe.name}</h1>
        {this.ingredientView()}
        {this.stepsView()}
        {this.nutritionView()}
      </div>
    )
  }

  ingredientView() {
    return (
      <div>
        <h2 className='page-header'>Ingredients</h2>
        <article>
          {this.state.recipe.ingredients.map(ingredient => <p key={ingredient.id}>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>)}
        </article>
      </div>
    )
  }

  stepsView() {
    return (
      <div>
        <h2 className='page-header'>Steps</h2>
        <ol>
          {this.state.recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
        </ol>
      </div>
    )
  }

  nutritionView() {
    return (
      <div>
        <h2 className='page-header'>Nutritional Facts</h2>
        <p><b>Calories</b>: {this.state.recipe.nutrition.calories}</p>
        <p><b>Carbs</b>: {this.state.recipe.nutrition.carbs}</p>
        <p><b>Protein</b>: {this.state.recipe.nutrition.protein}</p>
        <p><b>Fat</b>: {this.state.recipe.nutrition.fat}</p>
        <p><b>Cholestorol</b>: {this.state.recipe.nutrition.cholestorol}</p>
      </div>
    )
  }

  loadingView() {
    return (
      <h1>Loading...</h1>
    )
  }

  pageView() {
    if (this.state.loading) {
      return this.loadingView()
    } else if (this.state.error) {
      return (
        <h1>{this.state.error}</h1>
      )
    } else {
      return this.recipeView()
    }
  }

  render() {
    return (
      this.pageView()
    )
  }
}