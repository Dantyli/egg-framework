//工具函数
const moment=require('moment')
const jwt=require('jwt-simple')
const jwtSecret='123456';//密钥
const tokenExpiresTime=1000*60*60*24*7
module.exports={
    codeMsg:{
        100200:"success",
        100203:"未登录",
        100204:"账号或密码错误",
        100205:"系统用户已存在",
        100403:"权限不足",
        100406:"账户已停用，联系管理员",
        100422:"参数不合法",
        100500:"操作失败"
    },
    //系统时间
    now(){
        return moment().format('YYYY-MM-DD HH:mm:ss')
    },
    //生成token
    encodeToken(param){
        const payload={
            exp:(Date.now()+tokenExpiresTime)/1000,//此参数为second
            ...param
        }
        return jwt.encode(payload,jwtSecret)
    },
    //解析token
    decodeToken(token){
        try{
            return jwt.decode(token,jwtSecret)
        }catch(e){
            return {} //token错误或过期返回
        }
    }
}