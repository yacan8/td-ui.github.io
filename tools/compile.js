/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-15 16:07:35
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-15 16:08:34
 */

import logger from './utils/logger';
import gulp from 'gulp';

export default async function compile() {
  require('./gulpfile');
  await new Promise((resolve, reject) => {
    gulp.start('compile', function(err) {
      if (err) {
        logger.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
