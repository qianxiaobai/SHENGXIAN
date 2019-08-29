import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { SearchStyle } from "./styled"
class Search extends Component {
    render() {
        let {hotlist,show,inputVal,changelist,historylist} = this.props

        return (
            <SearchStyle>
                <div className="mn-card-item">
                    <div className="mn-card-body">
                        <input type="search" placeholder="搜索食行美食"  value={inputVal}  onInput={this.props.changeHandler.bind(this)} onChange={this.props.searchChang.bind(this)}/>
                    </div>
                    <div className="mn-card-body is-suffix is-action">
                        <button className="mn-btn is-primary is-sm" onClick={this.props.sousuoHandler.bind(this)}>取消</button>
                    </div>
                </div>
                {/* 模糊搜索 */}
                    <div className="search-history searchdiv" style={{display:show?"block":"none"}}>
                        <ul>
                            {changelist?
                                changelist.map((item,index)=>(
                                        <li key = {index}  onClick={this.props.clickMHsousuo.bind(this,item.Key)} >{item.Key}</li>
                                )):""
                            }  
                        </ul>
                    </div>

                    <div style={{display:show?"none":"block"}}>
                <div className="search-hotword">
                    <p className="title">热门搜索</p> 
                    <ul className="hotul">
                        {
                            hotlist.map((item,index)=>(
                                <li key = {index} onClick={this.props.clickHotHandler.bind(this,item.HotWordName)}>{item.HotWordName}</li>
                            ))
                        }
                    </ul>
                </div>
            <div className="search-history">
            <p className="title">最近搜索</p> 
                    <ul >
                        {
                            historylist.map((item,index)=>(
                                <li key={index} style={{display:item.val?"block":"none"}}>{item.val} <span onClick={this.props.deleteli.bind(this,index)} className="delete">×</span></li>
                            ))
                        }
                    <li  className="delAll" onClick={this.props.deleteAll.bind(this)}>清空搜索历史</li>
                    </ul>
            </div>
            </div>
            </SearchStyle>
        )
    }
    componentDidMount() {
        this.props.searchState()
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
