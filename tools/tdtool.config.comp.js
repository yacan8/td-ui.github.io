module.exports = component => {
  const Config = require('tdtool').Config
  const config = new Config({
    entry: `./components/${component}/demo/index`,
    dist: './dist/' + component,
    extends: ['react', ['less', {
      extractCss: true
    }]],
    template: true
  })
  return config.resolve()
}
