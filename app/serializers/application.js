import Ember from 'ember'
import DS from 'ember-data'

export default DS.JSONSerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr)
  },
  
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = payload

    if (payload && payload.items) {
      normalizedPayload = payload.items
    }

    return this._super(
      store,
      primaryModelClass,
      normalizedPayload,
      id,
      requestType
    )
  }
})
