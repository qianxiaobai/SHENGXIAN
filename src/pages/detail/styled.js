import styled from "styled-components";

export const DetailWrapper = styled.div`
width:100%;
height:100%;
.category-filter{
    z-index:10;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.5;
    position:fixed;
    left:0;
    top:49px;
    width:100%;
    height:47px;
    display:flex
    justify-content: space-around;
    background: #fff;
    .category-filter-item{
        width: 70px;
        text-align: center;
        border-bottom: 3px solid transparent;
        padding: .75rem 0 .5rem;
        position: relative;
    }
    .is-active{
        color: #49aa34;
        border-bottom-color: #49aa34;
    }
}
.fresh-row{
    width:100%;
    height:100%;
    padding-top:96px;
    overflow:auto;
    position:relative
    background: rgba(51,51,51,.06);
    .mn-scroller-contents{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:7px;
        color: #333;
        .goods{
            width:50%;
            height:288px;
            padding:5px;
           
            background:#ffff;
            border-radius:8px;
            .freshes-image-source{
                width:175.5px;
                height:175.5px;
            }
            .title{
                padding: 8px 8px 0;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap; 
            }
            .info{
                padding: 0 8px;
                margin-bottom:8px;
                height:64px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .unit{
                    color: #999899;
                    font-size: 14px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .price{
                    color: #f05423;
                    height: 30px;
                    display:flex
                    justify-content: space-between;
                    .car{
                        width:30px
                        height:30px;
                        padding-left:5px;
                        padding-top:5px;
                        border-radius:50%;
                        border:1px solid #000;

                        .iconfont{
                            font-size:16px;
                            color:red;
                        }
                    }
                }
            }
           
        }
    }
    .cartbutton{
        position:fixed;
        left:20px;
        bottom:50px;
        .circle{
            width:50px;
            height:50px;
            border-radius:50%;
            background:rgba(228, 83, 38,0.8);
            .icon{
                font-size:23px;
                padding-left:12px;
                padding-top:10px;
                color:#fff;
            }
        }
    }
   

}


`