import React, { Component,Fragment } from 'react'
import {TabBarWrapper} from './styled'
export default class header extends Component {
    render() {
        return (
            <Fragment>
                <TabBarWrapper>
                    <div className='fresh-search-bar-control'>
                        <div className='keyword-wrapper'>
                        <span></span>
                        <span>{this.props.val}</span>
                        </div>
                    </div>
                
                </TabBarWrapper>
            </Fragment>
        )
    }
}