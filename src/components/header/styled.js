import styled from "styled-components";

export const TabBarWrapper = styled.div`
   z-index:10;
   position:fixed;
    left:0;
    top:0;
    width:100%;
    height:49px;
    padding: 8px;
    background: #ccc;
    border-bottom: 1px solid #ddd;
    .fresh-search-bar-control{
        width:100%
        background: rgba(51,51,51,.06);
        height: 32px;
        border-radius: 20px;
        font-size: 15px;
        text-align: center;
        line-height: 32px;
        color: #999;
        display: flex;
        justify-content: center;
    }

`