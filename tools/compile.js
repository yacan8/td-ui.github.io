/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-15 16:07:35
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-15 16:08:34
 */

import getTDConfig from '../tdtool.config.comp'
import logger from './utils/logger'
import shell from 'shelljs'
import webpack from 'webpack'

function build(config) {
  return new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if (err) {
        logger.error(err);
        return reject(err);
      }

      logger.info(stats.toString({
        colors: true,
        timings: true,
      }));
      return resolve();
    })
  })
}

export default async function compile() {
  const argv = require('yargs').parse(process.argv.slice(3));
  const allComponents = shell.ls('./components')
  const components = argv._
  if (components.length) {
    for (let i = 0; i < components.length; i++) {
      // await build(getTDConfig(components[i]))
      await shell.exec(`babel components/${components[i]} --out-dir lib/${components[i]}`)
    }
  } else {
    for (let i = 0; i < allComponents.length; i++) {
      // await build(getTDConfig(allComponents[i]))
      await shell.exec(`babel components/${allComponents[i]} --out-dir lib/${allComponents[i]}`)
    }
  }
}
