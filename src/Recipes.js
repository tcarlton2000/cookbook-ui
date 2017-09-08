import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import fetch from 'isomorphic-fetch'

export default class Recipes extends Component {
	constructor() {
		super();
		this.state = {
			recipes: [
			]
		}
	}

	componentDidMount() {
		return fetch('/recipes')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({recipes: responseJson.recipes})
		})
		.catch((error) => {
		  console.error(error);
		});
	}

	render() {
		return (
			<div>
				<h1>Recipes</h1>
				<ListGroup>
					{this.state.recipes.map(item => <ListGroupItem key={item.id}>{item.name}</ListGroupItem>)}
				</ListGroup>
			</div>
		);
	}
}
