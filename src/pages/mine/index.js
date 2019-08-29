import React, { Component } from 'react'
import CountDown from "@components/home/countdown/countdown"
import { MineStyle } from "./styled"
export default class Mine extends Component {
    render() {
        return (
            <MineStyle>
                <div className="user-information is-night">
                    <div className="user-information-left">
                        <div className="avatar">
                            <img src="../../../public/img/user.png" alt="" />
                        </div>
                        <div className="information">
                            <div className="name">
                                <p className="name-text">19853451883</p>
                            </div>
                            <div className="grade-wrapper">
                                <div className="grade">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADhklEQVRIia2WW2wUVRjHf+fM2dntLtt7XUWKNK3UBB4QWSNyiYm3pEJCeOiLEXgyPpCYoBLgHWyIiYmJ8amE6AMRrQkRFWNilCIlQLkUlIay2QCmXMxSsduF7e7M+jBnlu52dnZb/SfnYb7zff/fZOZ85xzx6eU3qSIBrAPeANYAXUCTnpsArgEngaPAIFDwM1M+cxLYBuzWEC/F9FgDfKDhHwIHAbuSqZc6gFNAvw/MS1265pT2qAn4EnAaiM8BVK649lhfDfga8CPQ+h9grlqBn4DXKwG7ga8B83+AuTK1Z7cbcBeNAXwBRAFaQotpNJ8oVtmFPMnJ4flCF2jv1YDlArcy45/1tO8gaj76qlkrQ//o2/MFor23Af0Sp892z5w9NLyXr87v59L4cSfg21k1axcgFM5KKln6D0N3+DN/i7bsQs9KgcA0wrPiWWvKD9gFrFdAT/mMMiXKlBiGd5u+EOvl2daNs+K/jB/gj4mf/aA9CnjRL8NLo7dOk7k/zVMty1nU2E02n+HsjWPcnLpSeStxtFoBT88VeDd3DWvK4vklG7DsPIfP93F7+grBcABl+hKXKh5txDWrNbqQzR27CBhBjox8QkqOEWkM1lLa5Ld5e6pO1bNh8U7qVD0nEgMkHv5GKBIgGmjjraUfF/M+v/ou6VxqVr3COWJitcCUNOlp30FDMMal8V8Zuv0l3U+uZFnzy7RHlpXkFizPXpqQwFgtMCEkry7aTizcRTI1wrHEZ0QaTZZEnqOzPu7ZJh66qoAhYG21zHWPb6EjupK7k9f55vf9hJudv3HmxlEuJgeJmA1sXvFeNZshCXxXLSuowixvfoXM9H0Oj+wj1FRACGcuY/xFyhjjnkhWswH4XgLHcU5qX+WsLIfO7aWwYBIhRTFuBCRmyCDg3w5oxqDE2Sn7vDLsggWAZecYuPAR6eBNDFXVuJL6ANtti4PAO8Cqkle6d5bHgp2cTB7hH3WdYGjOXeRqWDMQM25tzwBncM4vAKycTfrvLOEGk4Bp+FvaknyqrvioWh6AtAHSOMfTKJTufKNALzDtBoyApKGtrjoMKAgb0TRZHAVho716XVg5kPdXDfwAbNJvNScJAYaSxSEEaWCT9ixq1grQCXGc7z5fDQPxchiU/sNyuRfhPUBnjaAEsA+fi7DfsrOBA7p4LbAR5+zspPSqn8C56n8LnKgEcvUvwdj0+NbCatQAAAAASUVORK5CYII=" />
                                    <span >注册会员</span>
                                </div>
                            </div>
                        </div>
                        <div className="user-information-right">
                            <img src="data:image/png;base64,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" />
                            <p >会员码</p>
                        </div>
                    </div>
                </div>





            </MineStyle>
        )
    }
}






