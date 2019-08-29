import styled from "styled-components"

export const SwiperListStyle = styled.div`

.floor-padding {
    padding: 5px 10px;
    background:#FFF
}
.mn-card-item {
   display:flex;
    padding: 1rem;
    align-items: center;
}
.home-floor-slide-products-container{
    overflow-x: scroll;
}
.aaaaaa{
    display: flex;
}










.home-floor-slide-products-item {
    width: 105px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 5px 5px 0;
    flex-shrink: 0;
}

.home-floor-slide-products-item div.name{
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
}
.home-floor-slide-products-item .activity-label{
    display: flex;
    line-height: 1.5625rem;
    height: 1.5625rem;
    width: 100%;
    align-items: center;
    span{
            text-overflow: ellipsis;
            padding: 1px .2rem;
            border-radius: 1rem;
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            line-height: 1;
            color: #ff550f;
            font-size: .6875rem;
            border: 1px solid #ff550f;
            background-color: #fff;
            max-width: 100%;
        
    }
}
.home-floor-slide-products-item div.price{
    font-size: .875rem;
    color: #ff3844;
    width: 100px;
    display: flex;
    position: relative;
    justify-content: space-between;
}
i{display:inline-block;font-size:20px;width:30px;height:30px}
.home-floor-slide-products-item div.price .unit{
    color: #999;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
}
.home-floor-slide-products-item div{
    font-size: .875rem;
    margin: 0;
}
.freshes-image {
    img{
        width:100%;
        height:100%
    }
    
}





`
