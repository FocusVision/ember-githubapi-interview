module.exports = function(env) {
  return {
    clientAllowedKeys: ['GITHUB_USERNAME', 'GITHUB_TOKEN'],
    failOnMissingKey: false,
  }
}
