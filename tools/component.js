/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-16 15:31:06
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-16 15:31:08
 */

import logger from './utils/logger';
import gulp from 'gulp';

export default async function compile() {
 require('./gulpfile');
 await new Promise((resolve, reject) => {
   gulp.start('component', function(err) {
     if (err) {
       logger.error(err);
       reject(err);
     } else {
       resolve();
     }
   });
 });
}
