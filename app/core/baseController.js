//所有Controller继承此类
const {Controller}=require('egg')
class BaseController extends Controller{
    /**
     * 响应结果处理
     * @param {object} param 
     */
    ok(param={}){
        const {ctx}=this;
        let params={code:'100200',...param}
        ctx.body={ 
            msg:ctx.helper.codeMsg[params.code],
            ...params
        }
    }
    /**
     * 输出info级别的日志
     * @param {string}
     */
    log(str){
        this.ctx.logger.info(str)
    }

}
module.exports=BaseController;