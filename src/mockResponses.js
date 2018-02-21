require('es6-promise').polyfill()
require('isomorphic-fetch')
require('fetch-reply-with')

export const recipeStates = {
  0: {
    recipes: [
      {
        id: 0,
        name: 'Page 1, Item 1'
      },
      {
        id: 1,
        name: 'Page 1, Item 2'
      }
    ],
    links: {
      previous: null,
      next: '/recipes?start=1'
    }
  },
  1: {
    recipes: [
      {
        id: 2,
        name: 'Page 2, Item 1'
      },
      {
        id: 3,
        name: 'Page 2, Item 2'
      }
    ],
    links: {
      previous: '/recipes?start=0',
      next: '/recipes?start=2'
    }
  },
  2: {
    recipes: [
      {
        id: 4,
        name: 'Page 3, Item 1'
      },
      {
        id: 5,
        name: 'Page 3, Item 2'
      }
    ],
    links: {
      previous: '/recipes?start=1',
      next: null
    }
  }
}

fetch('/recipes?start=0', {
  method: 'GET',
  replyWith: {
    status: 200,
    body: JSON.stringify(recipeStates[0]),
    headers: {
      'Content-Type': 'application/json'
    }
  }
});

fetch('/recipes?start=1', {
  method: 'GET',
  replyWith: {
    status: 200,
    body: JSON.stringify(recipeStates[1]),
    headers: {
      'Content-Type': 'application/json'
    }
  }
});

fetch('/recipes?start=2', {
  method: 'GET',
  replyWith: {
    status: 200,
    body: JSON.stringify(recipeStates[2]),
    headers: {
      'Content-Type': 'application/json'
    }
  }
});

fetch('/recipes/0', {
  method: 'GET',
  replyWith: {
    status: 200,
    body: JSON.stringify({
      id: 0,
      name: 'Page 1, Item 1',
      ingredients: [
        {
          id: 0,
          name: 'Pork',
          amount: 2,
          unit: 'lbs'
        },
        {
          id: 1,
          name: 'Salt',
          amount: 0.5,
          unit: 'tbls'
        },
        {
          id: 2,
          name: 'Something else',
          amount: 5,
          unit: 'count'
        }
      ],
      steps: [
        'Do this step first',
        'Then do this step',
        'Followed by this step',
        "And finally, this step"
      ],
      nutrition: {
        calories: 123,
        carbs: 34,
        protein: 12,
        fat: 0,
        cholestorol: 5
      }
    })
  }
})