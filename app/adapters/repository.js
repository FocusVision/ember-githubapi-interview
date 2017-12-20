import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  urlForQuery(query) {
    const { login } = query
    delete query.login
    
    return `${this.host}/users/${login}/repos`
  }
})
