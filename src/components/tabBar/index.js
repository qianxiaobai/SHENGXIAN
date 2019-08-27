import React, { Component } from 'react'
import { tabBarRoute } from "@router";
import { NavLink } from "react-router-dom";
import {HeaderWrapper} from "./styled.js"
export default class TabBar extends Component {
    render() {
        return (
            <HeaderWrapper>
                <ul>
                    {
                        tabBarRoute.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}>  
                                    <i className="iconfont">{item.icon}</i>                            
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </HeaderWrapper>
        )
    }
}
