/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-15 15:58:29
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-16 17:57:43
 */

import path from 'path';

module.exports = component => {
  const Config = require('tdtool').Config
  const config = new Config({
    entry: `./components/${component}/demo/index`,
    dist: './dist/' + component,
    sourceMap: true,
    extends: [['react', {
      source: [path.resolve(process.cwd(), 'components')]
    }], ['less', {
      extractCss: true
    }]],
    template: './tools/index.tpl'
  })
  return config.resolve()
}
