import Ember from 'ember'

const {
  RSVP: { hash }
} = Ember

export default Ember.Route.extend({
  model({ login }) {
    return hash({
      user: this.get('store').queryRecord('user', { login }),
      repositories: this.get('store').query('repository', { login })
    })
  }
})
