import React, { Component} from 'react'
import {Redirect} from "react-router-dom";
export default (PageWrapper)=>{
  return class  extends Component {
        render() {
            let {path,meta} = this.props;
            console.log(this.props)
            if(meta.auth && path!="/login"){
         console.log(111111)
                if(!sessionStorage.getItem("num")){
                    return <Redirect to="/login"/>
                }else{
                    return <PageWrapper {...this.props}/>
                }
               
            }
            
             return <PageWrapper {...this.props}  />                
        }
    }
}
