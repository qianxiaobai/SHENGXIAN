import React, { Component } from 'react'
import Header from "@components/header"
import {DetailWrapper} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
class Detail extends Component {
    constructor(){
        super();
        this.state={
            index:0
        }
    }

    render() {
        let {index}=this.state
        return (
            <DetailWrapper>
                <Header val='搜索食行生鲜美食'/>
                <div className="category-filter ">
                    <div className={index==0?'category-filter-item is-active':'category-filter-item'} onClick={this.props.handlerToggle.bind(this,0,this.props.Id,0)}>默认</div> 
                    <div className={index==1?'category-filter-item is-active':'category-filter-item'} onClick={this.props.handlerToggle.bind(this,1,this.props.Id,2)}>最新 </div> 
                    <div className={index==2?'category-filter-item is-active':'category-filter-item'} onClick={this.props.handlerToggle.bind(this,2,this.props.Id,1)}>销量 </div>
                    <div className={index==3?'category-filter-item is-active':'category-filter-item'} onClick={this.props.handlerToggle.bind(this,3,this.props.Id,3)}>价格 </div>
                </div>
                <div className='fresh-row'>
                    <div className='mn-scroller-contents'>
                        {
                            this.props.goodsDetail.map((item,index)=>(
                                <div className='goods' key={index} onClick={this.props.handlerProduct.bind(this,this.props,item.ProductId)}>
                                    <img className="freshes-image-source" src="http://picpro-sz.34580.com/sh/ImageUrl/559982/500.jpeg"></img>
                                    <div className="title">{item.ProductName}</div>
                                    <div  className="info">
                                        <div className="unit">{item.PvStandard}</div> 
                                        <div className="price">
                                            <p>¥{item.PeriodMoney}  {item.ProductId}</p>
                                            <div className='car'> 
                                            <div className='iconfont'>&#xe611;</div>
                                                </div>
                                            </div> 
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                    <div className='cartbutton'>
                        <div className='circle'>
                            <div className='iconfont icon'>&#xe611;</div>
                        </div>
                    </div>
                </div>
            </DetailWrapper>
        )

    }
   
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
