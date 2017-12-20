import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-search-filter'],
  placeholder: 'Search...',

  updateQuery() {},
  value: '',
  query: null,

  init(...args) {
    this._super(...args)

    const query = this.get('query')

    if (query) {
      this.set('value', query)
    }
  },

  actions: {
    updateQueryDebounced() {
      Ember.run.debounce(this, this.filter, 250)
    }
  },

  filter() {
    const value = this.get('value')
    const length = value && value.length
    let newQuery = ''

    if (length > 2) {
      newQuery = value
    }

    this.updateQuery(newQuery)
  }
})
