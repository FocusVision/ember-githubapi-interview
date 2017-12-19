import DS from 'ember-data'

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})