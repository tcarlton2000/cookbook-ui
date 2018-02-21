// @ts-check
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Pager } from 'react-bootstrap'

export default class Recipes extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      recipes: [
      ],
      links: {
        previous: null,
        next: null
      }
    }
  }

  componentDidMount() {
    this.getRecipes('/recipes?start=0')
  }

  getRecipes(link) {
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          recipes: responseJson.recipes,
          links: responseJson.links
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  previousButton() {
    if (this.state.links.previous == null) {
      return <span></span>
    } else {
      return <Pager.Item
        href="#"
        previous
        onSelect={() => this.getRecipes(this.state.links.previous)}
      >Previous</Pager.Item>
    }
  }

  nextButton() {
    if (this.state.links.next == null) {
      return <span></span>
    } else {
      return <Pager.Item
        href="#"
        next
        onSelect={() => this.getRecipes(this.state.links.next)}
      >Next</Pager.Item>
    }
  }

  recipesView() {
    return (
      <div>
        <h1>Recipes</h1>
        <ListGroup>
          {this.state.recipes.map(
            item =>
              <ListGroupItem
                onClick={() => {this.props.history.push(`/recipes/${item.id}`)}}
                key={item.id}>{item.name}
              </ListGroupItem>
          )}
        </ListGroup>
        <Pager>
          {this.previousButton()}
          {this.nextButton()}
        </Pager>
      </div>
    )
  }

  pageView() {
    if (this.state.recipeId != null) {
      return (
        <div>
          <a href="#" onClick={() => this.setState({recipeId: null})}>Back</a>
        </div>
      )
    } else {
      return this.recipesView()
    }
  }

  render() {
    return (
      this.pageView()
    )
  }
}
