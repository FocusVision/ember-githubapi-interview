import DS from 'ember-data'
import ENV from '../config/environment'

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Basic ${btoa(`${ENV.githubUsername}:${ENV.githubToken}`)}`
  }
})
