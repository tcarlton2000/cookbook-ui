import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Recipes extends Component {
	constructor() {
		super();
		this.recipes = [
			"Baked Chicken",
			"Air Fried Chicken Tenders",
			"Buffalo Stir Fried Noodles"
		]
	}
	render() {
		return (
			<div>
				<h1>Recipes</h1>
				<ListGroup>
					{this.recipes.map(item => <ListGroupItem>{item}</ListGroupItem>)}
				</ListGroup>
			</div>
		);
	}
}
