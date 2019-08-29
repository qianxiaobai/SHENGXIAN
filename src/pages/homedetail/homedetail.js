import React, { Component } from 'react'
import { HomeGoodsStyle } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import CountDown from "@components/home/countdown/countdown"
import { connect } from "react-redux"
class HomeGoods extends Component {
    render() {
        let { homeDetailList } = this.props
        console.log(homeDetailList)
        return (
            <HomeGoodsStyle>
                <CountDown title="正在抢购中" timeCount="2019/8/31 00:00:00" />
                <ul>
                    {
                        homeDetailList.map((item, index) => (
                            <li key={index}  onClick={this.props.sendinfo.bind(this,item.ProductName,item.ProductId)}>
                                <img src="http://picpro-sz.34580.com/sh/ImageUrl/157996/160.jpeg" alt="" />
                                <div className="divright">
                                    <h4>{item.ProductName}</h4>
                                    <p className="fistp">赠送鸡米花,送完为止</p>
                                    <p className="miandan"  style={{display:item.ActivityLabel?"block":"none"}}><span>{item.ActivityLabel}</span> </p>
                                    <p>
                                        <span className="price">￥{item.PeriodMoney}<i>/{item.Unit}</i> </span>
                                        <span className="delsprice">{item.PvStandard}</span>
                                        <span className="iconfont shopping">&#xe611;</span>
                                    </p>


                                </div>

                            </li>

                        ))


                    }





                </ul>



            </HomeGoodsStyle>
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(HomeGoods)