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
    updateQuery(value) {
      this.updateQuery(value)
    }
  }
})
