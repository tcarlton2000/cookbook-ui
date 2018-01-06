//@ts-check
import React, { Component } from "react";
import { ListGroup, ListGroupItem, Pager } from "react-bootstrap";

export default class Recipes extends Component {
	constructor() {
		super();
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
		  console.error(error);
		});
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

	render() {
		return (
			<div>
				<h1>Recipes</h1>
				<ListGroup>
					{this.state.recipes.map(
						item => <ListGroupItem
									key={item.id}>{item.name}
								</ListGroupItem>)}
				</ListGroup>
				<Pager>
					{this.previousButton()}
					{this.nextButton()}
				</Pager>
			</div>
		);
	}
}
