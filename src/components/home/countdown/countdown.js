import React, { Component } from 'react'
import { CountStyle } from "./style"


export default class countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
        }
    }

    render() {
        let {title,timeCount} = this.props
        return (
            <CountStyle>
                <h4>{title}</h4>
                <span>距结束：
                    <i>{this.state.day}</i>天
                    <i> {this.state.hour}</i>:
                    <i> {this.state.minute}</i>:
                    <i>{this.state.second}</i>
                </span>
            </CountStyle>
        )
    }
    componentDidMount() {
        this.countFun();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    countFun = () => {
        clearInterval(this.timer);
        let endtime = new Date(this.props.timeCount).getTime()
        let counttime = (endtime - new Date().getTime());
        // console.log(counttime)
        this.timer = setInterval(() => {
            if (counttime > 1000) {
                counttime -=1000;
                let day = Math.floor((counttime / 1000 / 3600) / 24);
                let hour = Math.floor((counttime / 1000 / 3600) % 24);
                let minute = Math.floor((counttime / 1000 / 60) % 60);
                let second = Math.floor(counttime / 1000 % 60);
                this.setState({
                    day: day,
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                
            }
            this.countFun()
        }, 1000);
    }

}








