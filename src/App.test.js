import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Recipes from './Recipes'
import Recipe from './Recipe'
import { Navbar, ListGroupItem } from 'react-bootstrap'
import { doImmediate } from './testUtils'

require('./mockResponses')

describe('App', () => {
  let props
  let mountedApp
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App {...props} />
      )
    }
    return mountedApp
  }

  beforeEach(() => {
    mountedApp = undefined
    app()
  })

  it('always returns a div', () => {
    const divs = app().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = app().find('div')
      const wrappingDiv = divs.first()
      expect(wrappingDiv.children()).toEqual(app().children())
    })

    it('contains two children', () => {
      const divs = app().find('div')
      const wrappingDiv = divs.first()
      expect(wrappingDiv.children().length).toEqual(2)
    })

    it('always renders a Recipes', () => {
      expect(app().find(Recipes).length).toBe(1)
    })

    it('always renders a Navbar', () => {
      expect(app().find(Navbar).length).toBe(1)
    })

    it('should load a Recipe when one is clicked', (done) => {
      app().find(ListGroupItem).at(0).simulate('click')
      doImmediate(done, () => {
        expect(app().find(Recipe).length).toBe(1)
        expect(app().find(Recipes).length).toBe(0)
      })
    })
  })
})
