'use strict';

const Controller = require('../core/baseController');

class HomeController extends Controller {
  async index() {
    this.ok()
  }
  async captcha(){
    const {ctx}=this
    const result=await ctx.service.tools.createCaptcha();
    console.log(result.text)
    ctx.type='svg'
    ctx.body=result.data
  }
}

module.exports = HomeController;
