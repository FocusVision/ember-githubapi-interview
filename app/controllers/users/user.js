import Ember from 'ember'

const {
  Controller,
  computed: { reads }
} = Ember

export default Controller.extend({
  user: reads('model.user'),
  repositories: reads('model.repositories')
})
