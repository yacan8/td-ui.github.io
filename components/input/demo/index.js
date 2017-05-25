/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-16 14:49:49
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-16 18:33:09
 */

/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.getElementById('app');

let render = () => {
  /* eslint-disable no-unused-vars */
  let Input = require('../index').default;

  /* eslint-disable no-unused-vars */
  function Demo() {
    return (
      <div className="td">
        <Input placeholder="gina" addonBefore="我是名字"/>
        <Input placeholder="124x" addonAfter="元"/>
      </div>
    );
  }

  ReactDOM.render(<Demo />, MOUNT_NODE);
};

try {
  render();
} catch (e) {
  console.log(e);
}

if (module.hot) {
  module.hot.accept(['../index'], () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}