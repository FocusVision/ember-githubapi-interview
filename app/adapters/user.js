import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  urlForQuery() {
    return `${this.host}/search/users`
  },
  urlForQueryRecord(query) {
    const { login } = query
    delete query.login

    return `${this.buildURL()}/users/${login}`
  }
})
