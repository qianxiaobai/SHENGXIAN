import styled from "styled-components";

export const TabBarWrapper = styled.div`
   position:fixed;
    left:0;
    top:0;
    width:100%;
    height:49px;
    padding: 8px;
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
export const BodyWrapper = styled.div`
width:100%;
height:100%;
padding-top:49px;
position: relative;
display:flex
.category-menu {
    position: absolute;
    width:99px;
    height: 100%;
    overflow: auto;
    font-size:16px;
    border-right: 1px solid #ddd;
    background: rgba(51,51,51,.06);
    .category-menu-list {
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        padding-bottom: 3rem;
        li {
            border-bottom: 1px solid #dfdfdf;
            background-color: transparent;
            a {
                display: block;
                text-decoration: none;
                color: #666;
                height: 46px;
                line-height: 46px;
                text-align: center;
            }
            .is-active {
                background: #fff;
                border-left: 3px solid #45ac2a;
                color: #45ac2a;
            }
        }
    }
}
.category-contents{
    position: absolute;
    right:0;
    width:275px;
    height:100%;
    padding:8px;
    overflow:auto
    .category-banner{
        width:100%;
        height:97px;
        margin-bottom:20px;
        background:#ccc

    }
    .category-section{
      
        width:100%;
        margin-bottom:20px;
     .category-section-title {
        display: flex;
        margin-bottom: 15px;
        h4{
         flex: 1;
         font-weight: 400;
         font-size: 20px;
         color:#000;

        }
        p{
           width: 50px;
            height: 24px; 
            text-align: center;
            font-size: 16px
        }
     }
    .category-section-title h4{
         flex: 1;
        font-weight: 400;
        }

        .command{
        width:100%;
        display:flex;
        width:100%;
        flex-wrap: wrap
            }
       div{
           width:100%;
            .flex{
            display:flex;
            width:100%;
            flex-wrap: wrap
            }
            .category-square-item {
            width: 33.3%;
            padding: 0 .25rem;
            margin-bottom: 1rem;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
        
            .image{
                width:100%;
                padding-bottom:10px;
                .mn-image-source{
                    width:80px;
                    height:80px;
                }
            }
            .title {
                width:100%
                font-size: .875rem;
                text-align: center;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
          }
        }
    }
}
`