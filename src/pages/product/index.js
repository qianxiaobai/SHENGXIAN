import React, { Component } from 'react'
import {GoodsSpeDetailWrapper} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import Swiper from "@common/swiper"
class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            productInfo:{},
            flag:false,
            num:1,
            banner:[
                'http://picpro-sz.34580.com/sh/ImageUrl/557018/800.jpeg',
                'http://picpro-sz.34580.com/sh/ImageUrl/557017/800.jpeg',
                'http://picpro-sz.34580.com/sh/ImageUrl/557016/800.jpeg'
            ]
        }   
    }
    render() {
        let {flag}=this.state;
     let {productInfo,productActivityList,productInfoServiceList,goodsNum}=this.props
        return (
            <GoodsSpeDetailWrapper>
                <div className='TC' style={{display:flag?'block':'none'}}>
                    <div>操作成功</div>
                    <div>成功加入购物车</div>
                </div>
                <div className='product-navigation'>
                    <div className="product-navigation-item is-selected">
                        <span >商品</span>
                    </div>
                    <div className="product-navigation-item ">
                        <span >详情</span>
                    </div>
                    <div className="product-navigation-item ">
                        <span>评价</span>
                    </div>
                </div>
                <div className='fresh-rows'>
                    <div className='mn-scroller-contents'>
                        <div className='mn-section product-detail'>
                            <div className='mn-carousel has-gray-background'>
                                <Swiper val={this.state.banner}/>
                            </div>
                            <div className='mn-card'>
                                <div className='product-information-title'>{productInfo.productName}</div>
                                <div className='product-information-price'>
                                    <div className='price'>￥
                                        <span className='span1'>{productInfo.periodMoney}</span>
                                        <span  className='span2'>/500g</span>
                                    </div>
                                    <div className='flashsale'>
                                        <p>限时抢购</p>
                                    </div>
                                </div>
                                <div className="product-sale-info">
                                    <div className="product-sale-price delete-price">
                                        <del className='price'>￥{productInfo.defaultMoney}</del>
                                        <del>/500g</del>
                                    </div> 
                                    <div className="product-sale-num">已售{productInfo.soldNumber}</div>
                                </div>
                                <div className='product-nostandard'>
                                    <div className='vertical-center'>
                                        <img data-v-5f8896d7="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8ZyBpZD0i5ZWG5ZOB6K+m5oOFIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8ZyBpZD0iMS1tYXgt5rS75p2A6bG8LeeJueS7tyIgc3Ryb2tlPSIjNDlBQTM0IiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1IC01MTEpIj4KICAgICAgPGcgaWQ9Iuavj+S7veS7t+agvC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ5NykiPgogICAgICAgIDxnIGlkPSLmgLvku7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEyKSI+CiAgICAgICAgICA8ZyBpZD0iZGV0YWlsc19pY29uX1dlaWdoaW5nX2Rpc2FibGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0xIiBkPSJNMTQsLTMuNTUyNzEzNjhlLTE1IEMxNCwtMy41NTI3MTM2OGUtMTUgMTIuOTc2OTIzMSwxLjczOTc2OTIzIDEyLjM4NDYxNTQsMS43Mzk3NjkyMyBMMS42MTUzODQ2MiwxLjczOTc2OTIzIEMxLjAyMzA3NjkyLDEuNzM5NzY5MjMgMCwtMy41NTI3MTM2OGUtMTUgMCwtMy41NTI3MTM2OGUtMTUiLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlN0cm9rZS0zIiBkPSJNMi4yMjQ0MzQ2Miw3LjIyNDQzNDYyIEMyLjIyNDQzNDYyLDQuNTg3MzY3NDEgNC4zNjI0NTUyNCwyLjQ0ODg2OTIzIDcsMi40NDg4NjkyMyBDOS42MzcwNjcyMSwyLjQ0ODg2OTIzIDExLjc3NTU2NTQsNC41ODczNjc0MSAxMS43NzU1NjU0LDcuMjI0NDM0NjIgQzExLjc3NTU2NTQsOS44NjE5NzkzOCA5LjYzNzA2NzIxLDEyIDcsMTIgQzQuMzYyNDU1MjQsMTIgMi4yMjQ0MzQ2Miw5Ljg2MTk3OTM4IDIuMjI0NDM0NjIsNy4yMjQ0MzQ2MiBaIi8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJTdHJva2UtNSIgZD0iTTUuNzQ3OTY5MjMsNy44MzM0ODQ2MiBDNS43NDc5NjkyMyw3LjE0MjEgNi45OTk4OTIzMSw1LjY0MzU2MTU0IDYuOTk5ODkyMzEsNS42NDM1NjE1NCBDNi45OTk4OTIzMSw1LjY0MzU2MTU0IDguMjUxODE1MzgsNy4xNDIxIDguMjUxODE1MzgsNy44MzM0ODQ2MiBDOC4yNTE4MTUzOCw4LjUyNDg2OTIzIDcuNjkxMjc2OTIsOS4wODU0MDc2OSA2Ljk5OTg5MjMxLDkuMDg1NDA3NjkgQzYuMzA4NTA3NjksOS4wODU0MDc2OSA1Ljc0Nzk2OTIzLDguNTI0ODY5MjMgNS43NDc5NjkyMyw3LjgzMzQ4NDYyIFoiLz4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTdHJva2UtNyIgcG9pbnRzPSIxMS44MjkgMTAuNDggMTMuNSAxMy45MjIgLjUgMTMuOTIyIDIuMTcyIDEwLjQ4Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"></img>
                                        <span>&nbsp;每份约</span>
                                        <span className='price'> ¥{productInfo.periodMoney}</span>
                                        <span className="weigh">称重</span>
                                        </div>
                                </div>
                            </div>
                        </div> 
                        <div className='product-other'>
                            <div className='activity'>
                                <span  className="tag">促销</span>
                                <div className='activity-container'>
                                    {
                                        productActivityList.map((item,index)=>(
                                            <div className='activity-item' key={index}>
                                                <span  className="type-name">{item.typeName}</span>
                                                <span  className="description">{item.name}</span>
                                            </div> 
                                        ))
                                    }
                                </div>
                                <div className="more">
                                    <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="/>
                                </div>
                            </div>
                            <div className='service'>
                                <div  className="tag">服务</div>
                                <div className='service-info'>
                                {
                                    productInfoServiceList.map((item,index)=>(
                                        <span key={index}>{item.name}&nbsp;.&nbsp;</span>
                                    ))
                                }
                                </div>
                                <div className="more">
                                    <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTkgNSI+CiAgPGcgaWQ9Im7ku7botbfllK4v5om+55u45Ly8IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9IjItbuS7tui1t+WUri3llYblk4Hor6bmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDAgLTUzNCkiPgogICAgICA8ZyBpZD0i5L+D6ZSA5qih5Z2XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxNCkiPgogICAgICAgIDxnIGlkPSJkZXRhaWxzX2ljb25fbW9yZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQwIDIwKSI+CiAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSIxLjUiIGN5PSIyLjUiIHI9IjEuNSIgZmlsbD0iI0Q4RDhEOCIvPgogICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHkiIGN4PSIxNy41IiBjeT0iMi41IiByPSIxLjUiIGZpbGw9IiNEOEQ4RDgiLz4KICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGN4PSI5LjUiIGN5PSIyLjUiIHI9IjIuNSIgZmlsbD0iIzMzMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-bottom'>
                    <div className='product-bottom-actions'>
                        <div className='add-collect'>
                            <p  className="iconfont">&#xe611;</p>
                            <p>客服</p>
                        </div>
                        <div className='add-collect'>
                            <p className="iconfont">&#xe611;</p>
                            <p>收藏</p>
                        </div>
                        <div className='add-collect'>
                            <p className="iconfont">&#xe611;</p>
                            <p onClick={this.handlerToggleCar.bind(this)}>购物车</p>
                            <span  className="tag">{goodsNum}</span>
                        </div>
                    </div>
                    <button onClick={this.props.handlerInsertCar.bind(this,productInfo,flag)}>加入购物车</button>
                </div>
            </GoodsSpeDetailWrapper>

        )

    }
    handlerToggleCar(){
        this.props.history.push({pathname:"/car"})
        console.log(this.props,'121212')
    }


}
export default  connect(mapStateToProps,mapDispatchToProps)(Product)