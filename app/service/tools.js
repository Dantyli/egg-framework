const Service=require('../core/baseService')
//email
const nodemailer=require('nodemailer')
//captcha 图形验证码
const svgCaptcha=require('svg-captcha')
const user_email=''
const auth_code='' //授权码
const transporter=nodemailer.createTransport({
    host:'smtp.163.com',
    secure:true,
    port:465,
    auth:{
        user:user_email,
        pass:auth_code
    }
})
class ToolService extends Service{
    /**
     * 发送邮件服务
     * @param {object}
     */
    async sendMail(param){
        const mailOptions={
            from:user_email,
            to:param.email,
            subject:param.sub,
            text:param.text,
            html:param.html||''
        }
        try{
            await transporter.sendMail(mailOptions)
            return true
        }catch(e){
            this.ctx.logger.warn('邮件发送失败：'+e)
            return false;
        }
    }
    async createCaptcha(){
        let captcha=svgCaptcha.create({
            size:4,
            noise:2,
            color:true,
            background:'#cc9966'
        })
        return captcha;
    }
}
module.exports=ToolService;