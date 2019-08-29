import styled from "styled-components";

export const GoodsSpeDetailWrapper = styled.div`
width:100%;
height:100%;
position:relative;
.TC{
    
    width:300px;
    height:80px;
    position:absolute;
    left:40px;
    top:20px;
    z-index:20;
    background:#fff;
    font-size:16px;
    padding:20px;
    border-radius:10px 

    div{
        line-height:20px;
    }
}
.product-navigation{
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #eee;
    background: #fafafa;
    display: flex;
    .product-navigation-item{
        width:33%;
        text-align: center;
        line-height: 40px;
        position: relative;
    }
    .is-selected{
        :before {
            position: absolute;
            content: "";
            width: 50%;
            height: 2px;
            background: #49aa34;
            bottom: 0;
            left: 25%;
        }
    }
}
.product-bottom{
    position:fixed;
    left:0;
    bottom:0
    width: 100%;
    height: 48px;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .product-bottom-actions{
        width: 60%;
        height:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .add-collect{
            width:33%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            position:relative;
            .tag{
                position: absolute;
                top: 3px;
                right: 0;
                color: #fff;
                background-color: #f05423;
                padding: 2px 5px;
                border-radius:50%;
            }
            .iconfont{
                font-size:20px
            }
        }
    }
       button{
        width: 114px;
        background: -webkit-gradient(linear,left top,right top,from(#ff705b),to(#ff3f57));
        background: linear-gradient(90deg,#ff705b,#ff3f57);
        color: #fff;
        font-size: 15px;
        border: 0;
        height: 40px;
        border-radius: 24px;
        display: block;
        outline: none;
        margin-right:8px;
    }
}

    .fresh-rows{
        width:100%;
        height:100%;
        padding-top:40px;
        padding-bottom:48px;
        overflow:auto;
        .mn-scroller-contents{
            width:100%;
            .mn-section{
                width:100%;
                height:532px;
               
                .mn-carousel{
                    width:100%;
                    height:375px;
                    background:#ccc;
                }
                .mn-card{
                    width:100%;
                    height:157px;
                    background-color: #fff;
                    margin-bottom:10px;
                    box-shadow: 0 0 2px rgba(0,0,0,.02);
                    overflow: hidden;
                    padding:13px;
                    .product-information-title{
                        margin-bottom: .5rem;
                        font-size: 1.125rem;
                        color: #333; 
                    }
                    .product-information-price{
                        font-size:14px;
                        color: #ff3e3e;
                        margin: 10px 0 5px;
                        display: flex;
                        line-height:33px;
                        .span1{     
                            font-size:18px;
                        }
                        .span2{
                            color: rgb(153, 153, 153);
                            font-size:14px;
                        }
                        .flashsale{
                            display: flex;
                            line-height:24px;
                            align-items: center; 
                            p{
                                background: linear-gradient(90deg,#ffa033,#ff5551);
                                border-radius: 20px;
                                padding: 0 6px;
                                color: #fff;
                                margin-left: 8px;
                                font-size: 11px;
                            }
                        }
                    }
                    .product-sale-info{
                        width:100%;
                        height:21px;
                        display: flex;
                        font-size:14px;
                        color: #999;
                        .product-sale-price {
                            flex:1
                            line-height:21px;
                        }
                        .product-sale-num{
                           
                            line-height:21px;
                        }
                    }
                    .product-nostandard{
                        display: flex;
                        align-items: center;
                        padding-top: 12px;
                        .vertical-center{
                            display: flex;
                            align-items: center 
                            .price{
                                color: #ff3834;
                                font-size:14px;
                            } 
                            .weigh{
                                margin-left: 6px;
                                color: #ff9535;
                                font-size: 12px;
                                background-color: rgba(255,166,85,.2);
                                border-radius: 5px;
                                padding: 2px 4px;
                            }
                        }
                    }
                }
            }
            .product-other{
                background-color: #fff;
                margin-bottom: 10px;
                padding: 12px 16px;
                font-size: 14px;
                width:100%;
                height:137px; 
                .activity{
                    width:100%;
                    display: flex;
                    .tag {
                        color: #999;
                    }
                    .activity-container{
                        flex: 1;
                        overflow: hidden;
                        margin-left: 10px;
                        .activity-item{
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding: 0 12px 12px 0;
                            vertical-align: middle;
                            white-space: nowrap;
                            .type-name{
                                color: #ff550f;
                                padding: 0 4px;
                                border-radius: 16px;
                                border: 1px solid #f05423;
                                margin-right: .25rem;
                                white-space: nowrap;
                            }
                            .description{
                                color: #333;
                            }
                        }
                    }
                    .more{
                        width: 24px;
                       
                        img{
                            width: 24px;
                            height: 24px;
                        }
                    }
                    
                }
                .service{
                    display:flex;
                    font-size:14px;
                    .service-info{
                        flex:1;
                        margin-left:10px;
                    }
                }
               

            }
        }
    }

`