import React, { Component ,Fragment} from 'react'
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "./style.css"
export default class Swipper extends Component {
    constructor(){
        super();
        this.state={
           banner:[]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="swiper-container" ref="swiperContainer">
                    <div className="swiper-wrapper">
                       {
                          this.props.val.map((item,index)=>(
                            <div className="swiper-slide" key={index}>
                                <img src={item}/>
                            </div>
                          ))
                       }
                    </div>
                
                    <div className="swiper-pagination"></div>   
                   
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
      new Swiper (this.refs.swiperContainer, {
     
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false,
          delay: 1000,
        },
        observer:true,
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        

      })       
    }
    componentDidUpdate(){
        
    }
}
