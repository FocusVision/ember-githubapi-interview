import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',
  query: '',

  actions: {
    updateQuery() {
      Ember.run.debounce(this, this._query, 250)
    }
  },

  _query() {
    const query = this.get('query')
    let newQuery = ''

    if (!query) {
      newQuery = ''
    }

    if (query && query.length > 2) {
      newQuery = query
    }

    this.set('q', newQuery)
  }
})
