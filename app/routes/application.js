import Ember from 'ember'

export default Ember.Route.extend({
  queryParams: {
    query: {
      as: 'q',
      refreshModel: true
    }
  },

  model(params) {
    if (params && params.q) {
      return this.get('store').query('user', params)
    }

    return []
  }
})
