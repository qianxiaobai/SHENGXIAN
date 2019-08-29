import styled from "styled-components"


export const MineStyle = styled.div`
color:#fff;
.user-information-left{
    display: flex;
    align-items: center;
    height:100%
}
.user-information .avatar{
    display: flex;
    justify-content: center;
    position: relative;
    margin-right: 10px;

}
.user-information .name{
    display: flex;
    align-items: center;
}
.user-information .name-text {
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100vw - 32px - 80px - 50px);
}
.name-text a {
    font-size: 1.25rem;
    color:#fff;
}
.user-information .grade{
    width:98px;
    font-size: 10px;
    line-height: 24px;
    height: 24px;
    border-radius: 24px;
    background: rgba(0,0,0,.2);
    box-shadow: inset 0 1px 0 1px rgba(0,0,0,.2);
    padding: 5px 20px 5px 30px;
    position: relative;
}
.user-information-right{
    flex-direction: column;
    justify-content: center;
}
.user-information-right img{
    width: 27px;
    height: 27px;
    display: block;
}
.user-information-right p{
    font-size: 10px;
    margin-top: 4px;
}
.user-information .avatar img{
    border-radius: 35px;
    display: block;
    width: 70px;
    height: 70px;
    object-fit: cover;
}
.user-information{
    width: 100%;
    max-width: 640px;
    background: url(https://wechatx.34580.com/static/img/user_bg_night.fedb362.png);
    background-size: cover;
    height: 56.09375vw;
    max-height: 359px;
    justify-content: space-between;
    color: #fff;
    position: relative;
    padding: 0 16px;
    box-sizing: border-box;
}
.user-information .grade img{
    width: 18px;
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 2px;
}
.outlogin,.updatapwd{
    border-bottom: 1px solid #eee;
    font-size: .875rem;
    padding: .5rem 1rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    color:#333
}
.success{
    position: absolute;
    width:90%;
    left:0;
    right:0;
    margin: 0 auto;
    top:0;
    height:50px;
    font-size:20px;
    color:#fff;
    text-align: center;
    line-height:50px;
    z-index:100;
background: rgba(255,255,255,0.5)
    
    }
.mineinput{
    margin:0 auto;
    border:1px solid #ccc;
    font-size: .875rem;
    padding: .2rem .2rem;
    height:2rem;
        width:100%;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    
    color:#333
    
    }
.updatepeddiv{
    margin-top:40px;
    width:100%;
    height:100%;;
    color:#333
        border:1px solid #ccc;
            h3{
                text-align: center}
    }





`

