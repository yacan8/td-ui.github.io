process.env.NODE_ENV = 'production'
const Config = require('tdtool').Config
const config1 = new Config({
  entry: './src/index',
  filename: 'td-ui.min.js',
  minimize: true,
  extends: ['react', ['less', {
    extractCss: 'td-ui.min.css'
  }]]
})
const config2 = new Config({
  entry: './src/index',
  filename: 'td-ui.js',
  extends: ['react', ['less', {
    extractCss: 'td-ui.css'
  }]]
})

module.exports = [config1.resolve(), config2.resolve()]
