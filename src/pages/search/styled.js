import styled from "styled-components"

export const SearchStyle = styled.div`
width:100%;
height:100%;
.mn-card-item { 
    padding: .75rem .5rem;
    display: flex;
    align-items: center;
    background: #fff;
}
.mn-card-item input{
    background-color: #f0f0f0;
    padding-left: .5rem;
    border-radius: 5px;
    width: 291px;
    height: 2rem;
    line-height: 2;
    border: none;
    outline: none;
}
.mn-card-body {
    flex: 1;
}
.mn-card-body .is-action {
    width:60px;
    display: flex;
    margin-top: -1rem;
    margin-bottom: -1rem;
    align-items: center;
}
.mn-btn{
    width:60px;
    border-radius: 5px;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    height: 2.75rem;
    line-height: 1.5rem;
    padding: .625rem 1rem;
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;
    vertical-align: middle;

}
.is-primary {
    background-color: #4cd964;
    color: #fff;
    margin:0 5px;
}
.mn-btn.is-sm {
    width:60px;
    height: 2rem;
    padding: .25rem 1rem;
    font-size: .875rem;
}

.search-hotword{
    margin-top:10px;
    }
.title{
    padding:12px 10px;
    font-size:16px; 
    }
.hotul{
    display: flex;
    flex-wrap: wrap;
    li{
        background:#fff;
        text-align: center;
        flex: 0 0 30%;
        text-align: center;
        background: #fff;
        margin: 1.5%;
        font-size: .875rem;
        padding: .5rem 0;

        }
    
    
    }



.search-history{
    ul{
        
        
        li{
            border-bottom: 1px solid #eee;
            font-size: .875rem;
            padding: .5rem 1rem;
            line-height: 1.5rem;
            display: flex;
            justify-content: space-between;
            background: #fff;
            }
         .delAll{
             text-align: center;
             display: flex;
             justify-content: space-around;
             }
        }
    
    }
.searchdiv{
    width:100%;
        height:100%;
    position: relative;
    background:#ccc;
}
.delete{
    float:right
        }









`


