import React, { Component} from 'react'
import {Redirect} from "react-router-dom";
export default (PageWrapper)=>{
  return class  extends Component {
        render() {
            let {path,meta} = this.props;
            // console.log(this.props)
            if(meta.auth && path!="/login"){
                if(!sessionStorage.getItem("num")){
                    return <Redirect to="/login"/>
                }
            }
            // console.log(9999)
             return <PageWrapper {...this.props}/>             
        }
    }
}
