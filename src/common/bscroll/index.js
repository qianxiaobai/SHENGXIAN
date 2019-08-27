import React, { Component } from 'react'
import {WrapperComponent} from "./styled"
import BScroll from "better-scroll";
export default class BScrollComponent extends Component {
    render() {
        return (
            <WrapperComponent ref="wrapper">
                {this.props.children}
            </WrapperComponent>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            tap:true,
            pullDownRefresh:true,
            pullUpLoad:true
        })
    }
}
