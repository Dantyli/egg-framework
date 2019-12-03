const {Service}=require('egg');
class BaseService extends Service{
    /**
     * 执行sql
     * @param {string}
     * @return {object}
     */
    sql(query){
        const {app}=this;
        return app.mysql.query(query)
    }
    /**
     * 转字符串，防止注入
     * @param {string|number}
     * @return {string}
     */
    escape(param){
        const {app}=this;
        return app.mysql.escape(param)
    }
}
module.exports=BaseService;