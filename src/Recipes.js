import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Recipes extends Component {
	constructor() {
		super();
		this.state = {
			recipes: [
				{
					id: 0,
					name: "Baked Chicken"
				},
				{
					id: 1,
					name: "Air Fried Chicken Tenders"
				},
				{
					id: 2,
					name: "Buffalo Stir Fried Noodles"
				}
			]
		}
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
