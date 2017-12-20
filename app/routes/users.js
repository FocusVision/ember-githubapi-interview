import Ember from 'ember'

export default Ember.Route.extend({
  queryParams: {
    q: {
      as: 'query',
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('user', params)
  },

  actions: {
    willTransition() {
      this.controller.set('q', '')
    }
  }
})
