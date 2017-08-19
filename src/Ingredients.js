import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Ingredients extends Component {
    constructor() {
        super();
        this.ingredients = [
            "Chicken",
            "Buffalo",
            "Salmon"
        ]
    }
    render() {
        return (
            <div>
                <h1>Ingredients</h1>
                <ListGroup>
                    {this.ingredients.map(item => <ListGroupItem>{item}</ListGroupItem>)}
                </ListGroup>
            </div>
        );
    }
}
