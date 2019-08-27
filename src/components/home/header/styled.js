import styled from "styled-components";

export const HeaderStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height:48px;
    width: 100%;
    font-size:14px;
    padding-left:8px;
    z-index:100;
    background:#fff;
.keyword-wrapper,
    .navigation {
        display: flex;
        align-items: center;
    }

    .switchcity .img-down {
        margin: 0 0 0 .25rem;
        width: .56rem;
    }

    .fresh-search-bar {
        padding: .5rem;
        flex: 1;
        border-bottom: 0;
        flex-shrink: 1;
    }

    .fresh-search-bar-control {
        background: #eee;
        height: 2rem;
        border-radius: 1rem;
        font-size: 14px;
        text-align: center;
        line-height: 2rem;
        color: #999;
        flex-shrink: 0;
    }

    .keyword-wrapper {
        text-align: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .keyword-wrapper .imgwrap {
        height: .9rem;
        flex-basis: 0.9rem;
        width: .9rem;
    }

    .keyword-content {
        margin-left: .25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 80%;
    }

    .membercode {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-right: .5rem;
    }

    .membercode img {
        width: 18px;
        height: 18px;
        display: block;
    }

    .membercode p {
        font-size: 10px;
    }


`