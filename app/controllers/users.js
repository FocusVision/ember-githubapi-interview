import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: 'aaa',

  actions: {
    updateQuery(queryString) {
      this.set('q', queryString)
    }
  }
})
