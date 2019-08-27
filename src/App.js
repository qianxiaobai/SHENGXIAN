import React, { Component, Fragment } from 'react'
import { routeConfig } from "@router"
import { Switch, Redirect } from "react-router-dom";
import BaseRoute from "@common/baseRoute";
export default class componentName extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Redirect from='/' to='/home' exact />
          {
            routeConfig.map((item,index)=>(
              <BaseRoute key={index} {...item}/>
           ))
          }
        </Switch>
      </Fragment>
    )
  }
}
