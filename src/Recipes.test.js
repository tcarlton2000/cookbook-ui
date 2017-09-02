import React from 'react';
import { mount } from "enzyme"
import Recipes from './Recipes'
import { ListGroup, ListGroupItem } from "react-bootstrap";

describe("Recipes", () => {
  let props;
  let mountedRecipes;
  const recipes = () => {
    if (!mountedRecipes) {
      mountedRecipes = mount(
        <Recipes {...props} />
      );
    }
  return mountedRecipes
  }

  beforeEach(() => {
    mountedRecipes = undefined;
  });

  it("always returns a div", () => {
    const divs = recipes().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = recipes().find("div");
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(recipes().children());
    });

    it("always renders header text", () => {
      expect(recipes().find("h1").length).toBe(1);
    });

    it("header text is set to Recipes", () => {
      expect(recipes().find("h1").text()).toBe("Recipes")
    })

    it("always renders a ListGroup", () => {
      expect(recipes().find(ListGroup).length).toBe(1);
    });

    describe("the rendered ListGroup", () => {
      beforeEach(() => {
        recipes().setState({
          recipes: [
            {
              id: 0,
              name: "Test Item 1"
            },
            {
              id: 1,
              name: "Test Item 2"
            }
          ]
        })
      });

      it("contains ListGroupItems", () => {
        expect(recipes().find(ListGroupItem).length).toBe(2)
      });

      it("contains correct text", () => {
        let listGroup = recipes().find(ListGroup)
        expect(listGroup.childAt(0).text()).toBe("Test Item 1")
        expect(listGroup.find(ListGroup).childAt(1).text()).toBe("Test Item 2")
      });
    });

  });
});