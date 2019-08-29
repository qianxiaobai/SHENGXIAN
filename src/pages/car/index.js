import React, { Component } from 'react'
import {CarWrapper} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
 class Car extends Component {
    render() {
        let {carList,selectedAll,goodsNum,goodsPrice}=this.props;
        return (
            <CarWrapper>
                <div className='mn-scroller is-hide-bar'>
                    <div className='mn-scroller-contents'>
                        <div className='carContent'>
                            {
                                carList.map((item,index)=>(
                                    <div className='cart-card' key={index}>
                                    <div className='flex-box'>
                                        <div className='flex-box-left card-title'>
                                            <div  className="card-title-wrapper">
                                                <div className="card-title-tag">换购</div> 
                                                <div  className="flex-1">满39元可换购1件</div>
                                            </div>
                                            <div className="card-title-tip">还差34.1元</div>
                                        </div>
                                        <div  className="flex-box-right"> 去凑单
                                            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAFiXLgWAAAABGdBTUEAALGPC/xhBQAAA9hJREFUSA21ljtoVEEUhvfuxt1goUnQRgVNCkWD3Yrk0RlRsLGIFiKilQo+QAsLo6I2lgbUWGnlG6yNRKs8NiRitQo+QUFBBEENeXl3/f67mcvcvY8YkwzMnplz/nPOnMfM3VSqevT395cDPBiltMVxvDXcPxbTWg4ODu6wtqkUjDdG5463GBgYcAMQOR0dHV0RYNobAbDTI17lAJYUc53lcvmRz4LxOeBjaGhoo0z4CLOQwKxtmnZd91XAhC3F1BgzOgEICpG+ZAGTXUYYikMmHcf5abtKCY1WX4hJOo6FmIVCYVOIWSwWswEmG0eRK0gJ6uvrc83NzVPVIHvvn1ZZIdtqCTeTyWxuaWl5bQPN2lcwDBQ/o7iGEEvMk62trdeMTDSkYISkQH2zzwM5zrO2trYOb20AcRSPaoz7yDN4/GG3cUgH8FnADwVOp9Nv8dIQeSSOUwC0VRYA3iSOo1pr1FRI5RfgGKulTBfgToC9tlxrT0E11kaZyeVyK/P5/HftY0eozLHIGcHw8HDjbBgjT+s409PTH6APDDOJKq1XZgB7URpNAkvmpRXgEQK+rl6CfiHfq+MU/TrQtR107ROAGeZ4e3u70hsavoIkeNoAKTLVBmU8hTohoCAlrldDqVRSHTwZSlIuSaYRUhCTN2zJxMSEd5Hkqa6ubhkX63esggQaHNHugEY64FOkhwq88kvHTpG9JezcmpqahlBQNjhqHejWaoCOxDBN2cSRfkYeaU5Bz5bWQAwqHDX4xtHIplOm2qJ+DXRkXwHL29h7VYaOR1XZV8DyEYJ7CkN99DWujzwF8qz27kFB3l4AXiVB3EgDPDMjfAg4HwcM8EdGRpoCjISNVweOdRtPB5UZRjcBn67OToKNRJGD8bUgPmLYL7ocwXtOV+82XZ1oJUHoG6US58FdZMq4x5+J4h1v4XbdhAQ7sSLfgUHQH3uI5g5TVVTZU6z1Mv/S68x3bNhg/4WGHBglIsoTQS/Gl8PzHEFdpY95gM/APYNNorEOjBIRrcZJH3M9PEWl4aWRiC7h6EKFFf07qwOjxg1fOjk5+RhHwb92AIjoEQ2xP+r/wz87MI5w4BBVN/S44YnipATvZW1t7U774zhnB7ZRHB3G6A2m2CZ9+mf6jfTtIn0v5+XAOOMudeHkstlbdEviE2wBI5dVERjM/CLgpKrBVegJY1F03jVYtC7itLH3gINf5gnWExM7You8aDeZjujkOHfJ8cK+RaTiHF/MSxgPvKYU7302m+3479eUP17rMPxB3WESiVE5WbjvAWm5hYNDcoDxbm7gKbWdcTgf+hdsVRSvP/xD2wAAAABJRU5ErkJggg=="  className="icon-arrow"/>
                                        </div>
                                    </div>   
                                    <div className='flex-box1'>
                                        <input type='checkbox' className='radio-icon'   checked={item.flag}   onChange={this.props.handlerSelected.bind(this,index)}></input>
                                        <div className='activity-item'>
                                            <img src="http://picpro-sz.34580.com/sh/ImageUrl/532949/120.jpeg" className="mn-image-source1 is-active"/>
                                            <div  className="addition-item-info">
                                                <div className="card-title-wrapper">
                                                    <div className="text-overflow">{item.productName}</div>
                                                </div>
                                                <div  className="unit-mood">{item.pvStandard}</div>
                                                <div className="flex-box-between">
                                                    <div  className="flex-box maxmark-gradient">
                                                        <div  className="price">¥{item.periodMoney}</div> 
                                                        <div className='freshes-counter'>
                                                            <span onClick={this.props.handlerReduce.bind(this,index,item.num)}>-</span>
                                                            <input type="input" value={item.num} onChange={this.props.handlerChangeInput.bind(this,index)} className="freshes-counter-control" />
                                                            <span onClick={this.props.handlerAdd.bind(this,index,item.num)}>+</span>
                                                        </div>
                                                    </div> 
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            <div className='cart-bottom'>
                <div className='cart-bottom-information'>
                    <div className='select'>
                        <input type='checkbox' checked={selectedAll} onClick={this.props.handlerSelectedAll.bind(this)}></input>
                        <span>全选</span>
                    </div>
                    <div className='information'>
                        <div>合计:<span>￥{goodsPrice}</span></div>
                        <div>已省￥0.00<span>(以免运费)</span></div>
                    </div>
                </div>
                <div className='cart-bottom-action'>去结算({goodsNum})</div>
            </div>
            </CarWrapper>
        )
    }
    componentWillUpdate(){

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Car)
