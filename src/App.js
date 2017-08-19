import React, { Component } from "react";
import "./App.css";
import Inventory from "./Inventory.js"
import Recipes from "./Recipes.js"
import Ingredients from "./Ingredients.js"
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Schedule extends Component {
  render() {
    return <h1>Schedule</h1>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: <Schedule />
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
              id="scheduleNavButton"
              eventKey={1}
              href="#"
              onClick={() => this.setState({ view: <Schedule /> })}
            >
              Schedule
            </NavItem>
            <NavItem
              id="inventoryNavButton"
              eventKey={2}
              href="#"
              onClick={() => this.setState({ view: <Inventory /> })}
            >
              Inventory
            </NavItem>
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