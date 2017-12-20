import Ember from 'ember'

const {
  RSVP: { hash }
} = Ember

export default Ember.Route.extend({
  model({ login }) {
    return hash({
      user: this.get('store').findRecord('user', login),
      repositories: this.get('store').query('repository', { login })
    })
  }
})
