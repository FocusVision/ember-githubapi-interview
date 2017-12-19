import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: '',
  filter: '',

  actions: {
    updateFilter() {
      Ember.run.debounce(this, this._filter, 250)
    }
  },

  _filter() {
    const filter = this.get('filter')
    let newQuery = ''

    if (filter && filter.length > 2) {
      newQuery = filter
    }

    this.set('q', newQuery)
  }
})
