import styled from "styled-components"

    export const  CenterNavStyle =styled.div`
        width:100%;
        padding:8px 8px 0 8px;
        height:200px;
        margin-bottom:10px;
        background:#fff;
        .swiper-container {
            height:100%;
                width:100%;
            ul{
                display:flex;
                height:100%;
                width:100%;
                 flex-wrap: wrap;
                li{
                    flex:0 0 20%;
                    img{
                        display: block;
                        margin: .5rem auto 0;
                        width: 40px;
                        height: 40px;
                    }
                    span{
                        display: block;
                        width:100%;
                        text-align: center;
                            padding: .5rem 0 0;
                            color: #666;
                            font-size: 12px;
                    }
                }
            }
            }
    }
.swiper-container .swiper-pagination{
        bottom:0;
    }
    .swiper-pagination-bullet{
        width: 10px;
    height: 3px;
    background-color: #ccc;
    border-radius: 1px;
    }
    .swiper-pagination-bullet-active{
    width: 15px;
    height: 3px;
    background-color: #3db51e;
}
        
        
        
        
        
        `