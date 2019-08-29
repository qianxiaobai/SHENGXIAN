import React, { Component } from 'react'
import {RegStyled} from "./styled"
import { connect } from "react-redux"
import {mapStateToProps, mapDispatchToProps} from "./connect"

class Login extends Component {
  constructor(props){
      super(props)
      console.log(this.props)
  }
    render() {
        let {phoneLogin,pwdLogin,successshow,successVal} = this.props
        return (
            <RegStyled>

                <div className="success" style={{display:successshow?"block":"none"}}>{successVal}</div>
                <p className="logopic"><img src="https://wechatx.34580.com/static/img/login_icon_logo%202.f2684c4.png" alt="" /></p>
                <div className="regInput">
                <p><input type="text" value={phoneLogin} placeholder="输入手机号" onChange={this.props.changeHandler.bind(this,"phone")}  /></p>
            
                    <p><input type="text" value={pwdLogin} placeholder="输入密码"  onChange={this.props.changeHandler.bind(this,"pwd")} /></p>
                     <button onClick={this.props.clickSubmit.bind(this,{...this.props})}>登录</button>
                    <p className="tologin"><span>没有账号，<a href="#/register">去注册？</a> </span></p>
                </div>
                

                <div className="tips">
                    <p>未注册手机验证后即完成注册 </p> 
                    <p >登录后：</p>
                    <p >1、账号将关联微信账号，可快捷登录微商城/小程序/APP/团购等；</p> 
                    <p >2、可通过微信接受下单/取货等消息通知。</p>
                 </div>

            </RegStyled>

        )
    }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Login)
