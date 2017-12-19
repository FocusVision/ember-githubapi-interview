import DS from 'ember-data'
import { pluralize } from 'ember-inflector';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  searchPath: 'search',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  },
  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'user':
       return `${this.host}/${this.searchPath}/${pluralize(modelName)}`
      default:
        return this._super(query, modelName)
    }
  }
})
