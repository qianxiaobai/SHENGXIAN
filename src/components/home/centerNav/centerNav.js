import React, { Component } from 'react'
import { centerNav_api, home_api } from "@api/home.js"
import { CenterNavStyle } from "./styled"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


export default class CenterNav extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let { navListLeft, navListRight } = this.props
        return (
            <CenterNavStyle>
                <div className="swiper-container" ref="swiperContainer">
                    <div className="swiper-wrapper">
                            <div className="swiper-slide" >
                                <ul>
                                    {
                                        navListRight.map((item, index) => (
                                            <li key={index}>
                                                <img src={item.URL} alt="" />
                                                <span>{item.Name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="swiper-slide">
                                <ul>
                                    {
                                        navListLeft.map((item, index) => (
                                            <li key={index}>
                                                <img src={item.URL} alt="" />
                                                <span>{item.Name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                        </div>
                        
                       
                    </div>
                    <div className="swiper-pagination" ></div>
                </div>
            </CenterNavStyle>

        )
    }

   componentDidMount() {
            new Swiper(this.refs.swiperContainer, {
                //   loop: true, // 循环模式选项
                freeMode: false,
                // autoplay: {
                //     disableOnInteraction: false
                // },
                pagination: {
                    el: '.swiper-pagination',
                },
                observer:true,//处理异步
            })
        // console.log(this.state.navListLeft,123123,this.state.navListRight)
    }
}


