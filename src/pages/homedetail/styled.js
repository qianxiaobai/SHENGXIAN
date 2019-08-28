import styled from "styled-components"


export const HomeGoodsStyle =styled.div`
    width: 100%;
    height:100%;
    background:#fff;
    overflow: auto;
    ul{
        width: 100%;
        background: #fff;
            background-color: #fff;
            padding: .75rem .75rem 0;
            font-size: .875rem;
           
        li{

            width: 100%;
            padding:12px 12px 0;
                display: flex;
                 justify-content: space-between;
            >img{
                display: inline-block
                width: 90px;
                height: 90px;
                position: relative;
                
                }
            .divright{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                margin-left: .5rem;
                flex: 1;
                padding-bottom: .75rem;
                border-bottom: 1px solid #f2f3f6;
                position: relative;
                h4{
                    font-size:14px;
                        }
                .fistp{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    font-size: .8125rem;
                    color: #999;
                    word-break: break-all;}


                }
.miandan{
    
        display: inline-block;
    position: relative;
    border-radius: 1rem;
    color: #ff550f;
    padding: 0 .4rem;
    font-size: .75rem;
    line-height: 1rem;
     margin-top:5px;
    >span{
           border: 1px solid red;
    border-radius: 1rem;
        }
    }

    }
        .price{
            display: block;
    width:100%;
        margin-top: .5rem;
    color: #f05423;
font-size: 1.125rem;
    font-weight: 400;
    >i{
        font-size: 14px;
        font-style: normal;
        color: #999;
    font-weight: 400;
        }
            }
        .delsprice{
font-size: .8125rem;
    color: #999;
    line-height: 1;

    width:100%;
        display: block;
}

.shopping{
    display: inline-block;
        color: #f05423;
        width: 30px;
        height:30px;
            border:1px solid #f05423;
                border-radius:50%;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
position: absolute;
right:20px;
    bottom:20px
    }





`