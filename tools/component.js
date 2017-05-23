/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-16 15:31:06
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-16 15:31:08
 */

import runGulpTask from './runGulpTask';
import open from 'open';

export default async function component() {
  await runGulpTask('component');
  await open('http://localhost:8080');
}
