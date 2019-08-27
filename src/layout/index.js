import React, { Component, Fragment } from 'react'
import TabBar from "../components/tabBar/index"
export default class Layout extends Component {
    render() {
        let {meta}=this.props
        return (
                <Fragment>
                    {this.props.children}
                    {meta.flag?<TabBar/>:''}
                </Fragment>
        )
    }
}
