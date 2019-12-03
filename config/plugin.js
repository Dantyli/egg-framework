'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  validate:{
    enable:true,
    package:'egg-validate'
  },
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },
  cors:{
    enable: true,
    package: 'egg-cors',
  },
  redis:{
    enable: true,
    package: 'egg-redis',
  }
};
