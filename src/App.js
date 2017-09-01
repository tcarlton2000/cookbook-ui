import React, { Component } from "react";
import "./App.css";
import Recipes from "./Recipes.js"
import Ingredients from "./Ingredients.js"
import { Navbar, Nav, NavItem } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: <Ingredients />
    };
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cookbook</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem
              id="recipeNavButton"
              eventKey={3}
              href="#"
              onClick={() => this.setState({ view: <Recipes /> })}
            >
              Recipes
            </NavItem>
            <NavItem
              id="ingredientsNavButton"
              eventKey={4}
              href="#"
              onClick={() => this.setState({ view: <Ingredients /> })}
            >
              Ingredients
            </NavItem>
          </Nav>
        </Navbar>
        <div className="container">
          {this.state.view}
        </div>
      </div>
    );
  }
}

export default App;