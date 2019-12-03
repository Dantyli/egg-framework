/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};
  //框架层异常处理
  config.onerror={
    all(err, ctx) {
      ctx.body = '系统内部错误！';
      ctx.status = 500;
    }
  }
  // cookie 签名密钥
  config.keys = 'dantyli';
  //nginx前置代理开启
  //config.proxy = true;
  //config.maxIpsCount = 1
  // 中间件配置
  // config.middleware = ['authLogin'];
  // config.authLogin={
  //   ignore:['/login']
  // }
  config.security={
    csrf:false,
    domainWhiteList:['http://localhost:3000']
  }
  config.cors={
    credentials:true,
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.session={
    renew: true,
    key: 'dantyli',
    maxAge: 4 * 3600 * 1000,
    httpOnly: true,
    encrypt: true
  }
  // 自定义配置
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
