import React, { Component } from 'react'
import { SwiperListStyle } from "./styled"
export default class componentName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { swiperListArr } = this.props
        return (
            <SwiperListStyle>
                <div className="mn-card floor-padding">
                    <div className="mn-card-item home-floor-slide-products">
                        <div className="home-floor-slide-products-container">
                            {
                                swiperListArr.map((item, index) => (
                                    <div className="home-floor-slide-products-item intersection-product-item"  key={index}>
                                        <div className="freshes-image productslice-img">
                                            <img className="freshes-image-source is-active" src="http://picpro-sz.34580.com/sh/ImageUrl/157996/160.jpeg" />
                                        </div>
                                        <div className="name">{item.ProductName}</div>
                                        <div className="activity-label">
                                        <span className="activity-label-content" style={{display:item.ActivityLabel?"block":"none"}}>{item.ActivityLabel}</span>
                                        </div>
                                        <div className="price">
                                            <div >
                                                <div >¥{item.UnitPeriodMoney}</div>
                                                <div className="unit">
                                                    {item.Weight}g/{item.Unit}
                                                </div>
                                            </div>
                                            <div className="cart"><i className="iconfont">&#xe611;</i></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </SwiperListStyle>

        )
    }
}
