import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {SwiperStyle} from "./styled"


export default class Swipers extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {array} =this.props
        return (
            <SwiperStyle>
            <div className="swiper-container"  ref="swiperContainer">
                <div className="swiper-wrapper">
            {
                array.map((item,index)=>(
                    <div className="swiper-slide" key={index}> 
                    <div className="marginBottom">
                        <img src={item.PicUrl}/>
                        </div>
                    </div>
                ))
            }
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>
                </div>
            </SwiperStyle>
        )
    }

    componentDidMount (){
        new Swiper(this.refs.swiperContainer, {
            //   loop: true, // 循环模式选项
              freeMode : false,
              autoplay: {
                disableOnInteraction: false
              },
              pagination: {
                el: '.swiper-pagination',
              },
              observer:true,//处理异步
            });
    };
    



}
