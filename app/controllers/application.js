import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  actions: {
    updateQuery(queryString) {
      this.set('q', queryString)
    }
  }
})
