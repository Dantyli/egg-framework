module.exports=(options,app)=>{
    return async function authLogin(ctx,next){
        if(!ctx.session.userid){
            ctx.body={
                msg:'未登录',
                code:'100203'
            }
        }else{
            await next()
        }
    }
}