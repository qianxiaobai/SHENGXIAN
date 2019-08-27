import React, { Component } from 'react'
import { RegStyled } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"

class Register extends Component {
    render() {
        let {phoneVal, passwordVal, successshow, successVal} = this.props
        return (
            <RegStyled>

                <div className="success" style={{ display: successshow ? "block" : "none" }}>{successVal}</div>
                <p className="logopic"><img src="https://wechatx.34580.com/static/img/login_icon_logo%202.f2684c4.png" alt="" /></p>


                <div className="regInput">
                    <p><input type="text" value={phoneVal} placeholder="输入手机号" onChange={this.props.changeHandler.bind(this, "phone")} />
                    </p>

                    <p><input type="text" value={passwordVal} placeholder="输入密码" onChange={this.props.changeHandler.bind(this, "pwd")} />
                    </p>
                    <button onClick={this.props.clickSubmit.bind(this, { ...this.props })}>注册</button>
                    <span>已有账号，<a href="#/login">去登录？</a> </span>
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


export default connect(mapStateToProps, mapDispatchToProps)(Register)