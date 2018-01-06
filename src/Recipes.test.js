import React from 'react';
import { mount } from "enzyme"
import Recipes from './Recipes'
import { ListGroup, ListGroupItem} from "react-bootstrap";
import { doImmediate } from './testUtils'

require('./mockResponses');

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
    recipes();
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
      it("contains ListGroupItems", (done) => {
        doImmediate(done, () => expect(recipes().update().find(ListGroupItem)).toHaveLength(2));
      });

      it("contains correct text", (done) => {
        doImmediate(done, () => {
          expect(recipes().find(ListGroupItem).at(0).text()).toEqual("Page 1, Item 1");
          expect(recipes().find(ListGroupItem).at(1).text()).toEqual("Page 1, Item 2");
        });
      });

      describe("Pagination", () => {
        let paginationRecipes = recipes();

        it("first page should have back button disabled", (done) => {
          doImmediate(done, () => {
            expect(paginationRecipes.find('.pager .previous')).toHaveLength(0);
            expect(paginationRecipes.find('.pager .next')).toHaveLength(1);
          });
        });

        it("next button should load second page", (done) => {
          paginationRecipes.find('.pager .next SafeAnchor a').simulate('click');
          doImmediate(done, () => {
            expect(paginationRecipes.find('.pager .previous')).toHaveLength(1);
            expect(paginationRecipes.find('.pager .next')).toHaveLength(1);

            expect(paginationRecipes.find(ListGroupItem).at(0).text()).toEqual("Page 2, Item 1");
            expect(paginationRecipes.find(ListGroupItem).at(1).text()).toEqual("Page 2, Item 2");
          });
        });

        it("last page should not have next button", (done) => {
          paginationRecipes.find('.pager .next SafeAnchor a').simulate('click');
          doImmediate(done, () => {
            expect(paginationRecipes.find('.pager .previous')).toHaveLength(1);
            expect(paginationRecipes.find('.pager .next')).toHaveLength(0);

            expect(paginationRecipes.find(ListGroupItem).at(0).text()).toEqual("Page 3, Item 1");
            expect(paginationRecipes.find(ListGroupItem).at(1).text()).toEqual("Page 3, Item 2");

          });
        });

        it("previous button should load second page", (done) => {
          paginationRecipes.find('.pager .previous SafeAnchor a').simulate('click');
          doImmediate(done, () => {
            expect(paginationRecipes.find('.pager .previous')).toHaveLength(1);
            expect(paginationRecipes.find('.pager .next')).toHaveLength(1);

            expect(paginationRecipes.find(ListGroupItem).at(0).text()).toEqual("Page 2, Item 1");
            expect(paginationRecipes.find(ListGroupItem).at(1).text()).toEqual("Page 2, Item 2");
          });
        });

        it("preivous button should load first page", (done) => {
          paginationRecipes.find('.pager .previous SafeAnchor a').simulate('click');
          doImmediate(done, () => {
            expect(paginationRecipes.find('.pager .previous')).toHaveLength(0);
            expect(paginationRecipes.find('.pager .next')).toHaveLength(1);

            expect(paginationRecipes.find(ListGroupItem).at(0).text()).toEqual("Page 1, Item 1");
            expect(paginationRecipes.find(ListGroupItem).at(1).text()).toEqual("Page 1, Item 2");
          });
        });
      });
    });
  });
});