import React from 'react'
import { mount } from 'enzyme'
import Recipe from './Recipe'

require('./mockResponses')

describe('Recipe', () => {
  let props = {
    match: {
      params: {
        recipeId: 0
      }
    }
  }
  let mountedRecipe
  const recipe = () => {
    if (!mountedRecipe) {
      mountedRecipe = mount(
        <Recipe {...props} />
      )
    }
    return mountedRecipe
  }

  beforeEach(() => {
    mountedRecipe = undefined
    recipe()
  })

  it('title should match Recipe name', () => {
    let h1 = recipe().find('h1')
    expect(h1.length).toBe(1)
    expect(h1.text()).toBe('Page 1, Item 1')
  })

  it('should contain 4 sections', () => {
    let sections = recipe().find('div')
    expect(sections.length).toBe(4)
  })

  describe('Ingredients', () => {
    let ingredients
    let article

    beforeAll(() => {
      ingredients = recipe().find('div').first().children().at(1)
    })

    it('first section should be Ingredients', () => {
      let h2 = ingredients.find('h2')
      expect(h2.length).toBe(1)
      expect(h2.first().text()).toEqual('Ingredients')
    })

    it('should contain an article', () => {
      article = ingredients.find('article')
      expect(article.length).toBe(1)
    })

    it('should contain 3 ingredients', () => {
      let p = article.find('p')
      expect(p.length).toBe(3)
      expect(p.at(0).text()).toEqual('2 lbs Pork')
      expect(p.at(1).text()).toEqual('0.5 tbls Salt')
      expect(p.at(2).text()).toEqual('5 count Something else')
    })
  })

  describe('Steps', () => {
    let steps

    beforeAll(() => {
      steps = recipe().find('div').first().children().at(2)
    })

    it('section should be Steps', () => {
      let h2 = steps.find('h2')
      expect(h2.length).toBe(1)
      expect(h2.first().text()).toEqual('Steps')
    })

    it('should contain an <ol>', () => {
      let ol = steps.find('ol')
      expect(ol.length).toBe(1)
    })

    it('should contain 4 steps', () => {
      let li = steps.find('li')
      expect(li.length).toBe(4)
      expect(li.at(0).text()).toEqual('Do this step first')
      expect(li.at(1).text()).toEqual('Then do this step')
      expect(li.at(2).text()).toEqual('Followed by this step')
      expect(li.at(3).text()).toEqual('And finally, this step')
    })
  })

  describe('Nutrition', () => {
    let nutrition
    let p

    beforeAll(() => {
      nutrition = recipe().find('div').first().children().at(3)
    })

    it('should be Nutrition', () => {
      let h2 = nutrition.find('h2')
      expect(h2.length).toBe(1)
      expect(h2.first().text()).toEqual('Nutritional Facts')
    })

    it('should have 5 nutritional facts', () => {
      p = nutrition.find('p')
      expect(p.length).toBe(5)
    })

    it('should contain calories', () => {
      expect(p.at(0).text()).toEqual('Calories: 123')
    })

    it('should contain carbs', () => {
      expect(p.at(1).text()).toEqual('Carbs: 34')
    })

    it('should contain protein', () => {
      expect(p.at(2).text()).toEqual('Protein: 12')
    })

    it('should contain fat', () => {
      expect(p.at(3).text()).toEqual('Fat: 0')
    })

    it('should contain cholestorol', () => {
      expect(p.at(4).text()).toEqual('Cholestorol: 5')
    })
  })
})