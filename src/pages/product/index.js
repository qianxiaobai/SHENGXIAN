import React, { Component } from 'react'
import {GoodsSpeDetailWrapper} from "./styled"
export default class Product extends Component {
    render() {
        return (
            <GoodsSpeDetailWrapper>
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
                            </div>
                            <div className='mn-card'>
                            <div className='product-information-title'>黄瓜</div>
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
                            <p>购物车</p>
                        </div>
                    </div>
                    <button data-v-6b83fd2a="">加入购物车</button>
                </div>
            </GoodsSpeDetailWrapper>
        )
    }
}
