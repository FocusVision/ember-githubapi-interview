import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  urlForQuery({ login }) {
    return `${this.host}/users/${login}/repos`
  }
})
