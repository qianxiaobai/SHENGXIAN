import styled from "styled-components";

export const CarWrapper = styled.div`
width:100%;
height:100%;
padding-bottom:108px;
position:absolute
.cart-bottom{
    height:58px;
    display: flex;
    background-color: #fff;
    width:100%;
    margin: 0 auto;
    font-size:16px;
    padding: 8px 16px;
    .cart-bottom-action{
        text-align: center;
        width:102px;
        height:37px
        padding:8px 12px;
        border-radius:20px;
        color:#fff;
        background:#ff705b
    }
    .cart-bottom-information{
        flex:1;
        display:flex
        .information{
            flex:1;
            margin-left:10px;
            font-size:12px;
            div:nth-child(1) span{
                color:#ff4b46;
                font-size:14px;           
            }
            div:nth-child(2) span {
                color:#999;
            }
        }
    }
}
.mn-scroller {
    width: 100%;
    height: 100%;
    background: rgba(51,51,51,.06);
    overflow: auto;
    .carContent{
        width:100%;
        .cart-card{
            margin:12px;
            padding: 12px;
            background-color: #fff;
            border-radius: 6px;
            font-size:16px;
            .flex-box{
                display:flex;
                .flex-box-left {
                    flex:1;
                    .card-title-wrapper {
                        display: flex;
                        align-items: center;
                        .card-title-tag {
                            font-size:14px;
                            border: 1px solid #ff550f;
                            color: #ff550f;
                            padding:5px;
                            line-height: 1;
                            border-radius: 10px;
                            margin-right:5px;
                        }
                        .flex-1{
                            flex:1
                        }
                    }
                    .card-title-tip {
                        margin-top:4px;
                        font-size:14px;
                        color:#666;
                    }
                }
                .flex-box-right{
                    color: #49aa34;
                    display:flex;
                    
                    vertical-align:middle
                    font-size: .875rem;
                    .icon-arrow{
                        width: 8px;
                        height:13px;
                        margin-top:2px;
                        margin-left:5px;
                    }
                }
            }
            .flex-box1{
                width:100%;
                display:flex;
                align-items:center
                .radio-icon {
                    margin-right:10px;
                }
                .activity-item{
                    display:flex;
                    flex:1;
                    padding:16px 0;
                    .mn-image-source1{
                        width:75px;
                        height:75px;
                        margin-right:10px;
                    }
                    .addition-item-info{
                        flex:1
                        .card-title-wrapper{
                            color:#333;
                            font-size:14px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap
                        }
                        .unit-mood{
                            font-size: .75rem;
                            color: #999;
                        }
                        .flex-box-between{
                            display:flex;
                            .flex-box {
                                flex:1;
                                color: #ff4b46;
                                font-size:14px;
                                justify-content:space-between
                                .freshes-counter{
                                    display:flex;
                                    justify-content:space-between
                                    span{
                                        display:inline-block;
                                        width:12px
                                        height:10px;
                                    }
                                    .freshes-counter-control{
                                        outline: none;
                                        border-radius: 0;
                                        margin: 0 6px;
                                        width: 35px;
                                        display: block;
                                        padding: 0;
                                        height:21px;
                                        text-align: center;
                                        border: none;
                                        border-radius: 2px;
                                        background-color: #f2f3f6;
                                    }
                                }
                               
                            }
                        }
                       
                    }
                }
            }

        }
    }
}
`