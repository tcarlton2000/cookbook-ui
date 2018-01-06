import React from 'react';
import { mount } from "enzyme"
import App from './App';
import Recipes from './Recipes'
require('./mockResponses');

describe("App", () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App {...props} />
      );
    }
  return mountedApp
  }

  beforeEach(() => {
    mountedApp = undefined;
  });

  it("always returns a div", () => {
    const divs = app().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = app().find("div");
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(app().children());
    });

    it("contains only one child", () => {
      const divs = app().find("div");
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children().length).toEqual(1)
    });

    it("always renders a Recipes", () => {
      expect(app().find(Recipes).length).toBe(1);
    });
  });
})