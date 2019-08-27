import styled from "styled-components";

export const GoodsSpeDetailWrapper = styled.div`
width:100%;
height:100%;
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
            .mn-section product-detail{
                width:100%;
                height:532px;
                background:#ccc;
            }
        }
    }

`