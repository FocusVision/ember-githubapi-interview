import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-search-filter'],
  placeholder: 'Type here...',

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
    const filter = this.get('value')
    let newQuery = ''

    if (filter && filter.length > 2) {
      newQuery = filter
    }

    this.updateQuery(newQuery)
  }
})
