process.env.NODE_ENV = 'production'

module.exports = component => {
  const Config = require('tdtool').Config
  const config = new Config({
    entry: './components/' + component + '/index',
    dist: './lib/' + component,
    extends: ['react', ['less', {
      extractCss: true
    }]]
  })
  return config.resolve()
}
