import styled from "styled-components" 



export const RegStyled  =  styled.div`
width:100%;
height:100%;
    background:#fff;
.logopic{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0 .5rem;
    color: #4aaa35;
    
    img{
        display:block;
        width:26.7%
           
        }
    }
.regInput{
  flex: 1;
  position: relative;
  padding: 0 10px;
  margin:70px 0;
      p{
          position: relative}
}
input {
    width: 90%;
  background: #fff;
  caret-color: #fd8238;
  font-family: PingFangSC-Regular;
  color: #333;
  border: 0;
  letter-spacing: 0;
  font-size: 20px;
  height: 44px;
  padding: 11px 0;
  line-height: normal;
  outline: none;
  border-bottom:2px solid #ccc;
      margin: 10px ;5px
}
button{
    width: 100%;
    display: inline-block;
    color: #fff;
    border:0;
    font-size:18px;
    height: 2.75rem;
    line-height: 2.75rem;
    border-radius: 3rem;
    background-image: linear-gradient(90deg,#25c949,#4aaa35);}
    
i {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  left:85%
  top: 50%;
  margin-top: -8px;
  color: #333;
  font-size: 18px;
}

.tips {
    color: #999;
    font-size: .875rem;
    margin: 3.5rem 5.5% 0;
}
.success{
    position: absolute;
    width:90%;
        left:0;
        right:0;
        margin: 0 auto;
        top:15%;
        height:50px;
        font-size:20px;
            background:#fff;
                color:#25c949;
                border:1px solid #25c949;
    box-shadow: 5px  5px  5px 5px  #ccc;
    text-align: center;
    line-height:50px;
    z-index:100
    
    }
`