import Ember from 'ember'

export default Ember.Route.extend({
  queryParams: {
    q: {
      as: 'query',
      refreshModel: true
    }
  },

  model(params) {
    if (params && params.q) {
      return this.get('store').query('user', params)
    }

    return []
  },

  actions: {
    willTransition() {
      this.controller.set('q', '')
    }
  }
})
