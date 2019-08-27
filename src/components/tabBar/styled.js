import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width:100%;
    height:50px;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between
        li{
            width:25%;
            height:100%
        }
        a{
            display: flex;
            width:100%;
            height:100%;
            flex-direction: column;
            justify-content: center;
            align-items: center
           i{
            font-size:20px;
            }
            span{
                font-size:15px;
            }
            .active{
                color:#c33;
            } 
            
        }
    }
`