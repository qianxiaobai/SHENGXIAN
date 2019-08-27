import React, { Component, Fragment } from 'react'
import Header from "@components/home/header/header.js"
import { Page } from "./styled"
import { HomeStyle } from "./homestyled"
import CenterNav from "@components/home/centerNav/centerNav"
import Swipers from "@components/home/swiper/swiper"
import SwiperList from "@components/home/swiperList/swiperList"
import { home_api } from "@api/home.js"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { connect } from "react-redux"
import BScrollComponent from "@common/bscroll/index"

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { arr, arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13, arr14, arr15,navListLeft,navListRight} = this.props
        return (
            <Fragment>
                <Header />
                <Page>
                    {/* 头部 */}
                    {/* ---------------------------- */}
                    <HomeStyle>
                        <div ref="wrapscroll"  className="wrapscroll">
                        <BScrollComponent ref="scrolltop">
                            {/*  */}

                            <Swipers array={arr} />

                            {/*  */}
                            <div>
                                <div className="sell-point is-iphone5">
                                    <div className="point-wrapper">
                                        <img
                                            src="http://pic2.34580.cn/group1/M00/54/14/wKgNYlw9pxGAbFW9AAAHDoo9uw0348.png"
                                            className="point-img" />0起送0运费
                    </div>
                                    <div className="point-wrapper">
                                        <img
                                            src="http://pic2.34580.cn/group1/M00/68/C7/wKgNY1w9N8mAGj-4AAADoUsJVko155.png"
                                            className="point-img" />晚到必赔
                    </div>
                                    <div className="point-wrapper">
                                        <img
                                            src="http://pic2.34580.cn/group1/M00/69/38/wKgNY1w9nFWAaONrAAAHmBntHvg444.png"
                                            className="point-img" />100%检
                    </div>
                                    <div className="point-wrapper">
                                        <img
                                            src="http://pic2.34580.cn/group1/M00/54/85/wKgNYlw-DF2AKwSaAAAG4pHr6xE740.png"
                                            className="point-img" />包退包赔
                    </div>
                                </div>
                            </div>

                            {/* ------------------ */}
                            <div>

                                <div className="home-shortcunicons-animated"><img
                                    src="http://pic2.34580.cn/group1/M00/F2/1A/wKgNY11eg_CACCV5AAJTRvB_SBU275.gif" />
                                </div>

                            </div>
                            {/*  centernav   */}
                            <CenterNav  {...this.props}/>

                            {/* 新人有礼 */}
                            <section className="newman">
                                <img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" />
                            </section>

                            {/*  */}
                            <SwiperList swiperListArr={arr9} />
                            {/*  */}

                            <div className="home-floor-column-two intersection-card-item">
                                <div className="freshes-image intersection-adv-item" >
                                    <div className="freshes-image-holder">
                                    </div>
                                    <img className="freshes-image-source is-active" src="http://pic2.34580.cn/group1/M00/DE/75/wKgNYl1g9ESAaLPQAACOhC3PnhM88.jpeg" />
                                </div>
                                <div className="freshes-image intersection-adv-item" >
                                    <div className="freshes-image-holder" >
                                    </div>
                                    <img className="freshes-image-source is-active" src="http://pic2.34580.cn/group1/M00/F2/55/wKgNY11fNOSACULvAAGs5iegtKg75.jpeg" />
                                </div>
                            </div>
                            {/* ---- */}
                            <div className="findgoods">
                                <div>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/F2/65/wKgNY11fQ-SAAiTlAACibWWahuU74.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/DE/D9/wKgNYl1hXmuAbJSkAACUiIl3yzs22.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/DD/AC/wKgNYl1frYqATWuOAAC1sAuPXQo94.jpeg" alt="" /></a>
                                </div>
                            </div>
                            {/* ------------ */}

                            <div className="xianliangmiaosha">
                                <img src="http://pic2.34580.cn/group1/M00/DE/28/wKgNYl1gMFeAblXwAAF4qFzTy6g71.jpeg" alt="" />
                            </div>

                            {/*  */}
                            <Swipers array={arr2} />
                            {/*  */}

                            <div className="findgoods">
                                <div>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/F2/93/wKgNY11feOaAeK3aAADeRZcN1Cs53.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/C2/ED/wKgNYl0vWrKABIOLAADbWNLOb8E39.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/F2/AF/wKgNY11fm1GACCqgAADx4JtDmvY30.jpeg" alt="" /></a>
                                </div>
                            </div>
                            {/*  */}

                            <Swipers array={arr0} />
                            {/*  */}
                            <div className="findgoods">
                                <div>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/EA/C8/wKgNY11Si_KAbNkFAADU4CzrnRI98.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/EA/60/wKgNY11SDAaAFhthAADruLTZEj814.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/F1/9B/wKgNY11d_8CABDhEAAD_Kn3J6rI49.jpeg" alt="" /></a>
                                </div>
                            </div>
                            {/*  */}

                            <Swipers array={arr3} />
                            <SwiperList swiperListArr={arr10} />
                            <Swipers array={arr4} />
                            <SwiperList swiperListArr={arr11} />
                            <Swipers array={arr5} />
                            <SwiperList swiperListArr={arr12} />
                            <Swipers array={arr6} />
                            <SwiperList swiperListArr={arr13} />
                            <Swipers array={arr8} />
                            <SwiperList swiperListArr={arr14} />
                            <Swipers array={arr1} />
                            <SwiperList swiperListArr={arr15} />
                            <Swipers array={arr0} />
                            <SwiperList swiperListArr={arr11} />
                            <div className="findgoods">
                                <div>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/BA/77/wKgNYl0c6ZiAM97VAAC2q_QceLQ63.jpeg" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/D5/4F/wKgNYl1RrIeANYx5AAER1OH21wQ625.png" alt="" /></a>
                                    <a href=""><img src="http://pic2.34580.cn/group1/M00/EA/0C/wKgNY11RRpyAamLkAAB-57tDzuM902.png" alt="" /></a>
                                </div>
                            </div>
                            {/*  */}
                            <Swipers array={arr7} />
                            <SwiperList swiperListArr={arr9} />
                            {/*  */}
                            <img src="https://wechatx.34580.com/static/img/home_bot_logo.61ac9c6.png" className="home-bottom-logo is-download"></img>
                        </BScrollComponent>
                        </div>
                        {/* <div className="rightbotNav" onClick={this.props.clickHandler.bind(this)}>
                            <span>︿</span>
                        </div> */}
                    </HomeStyle>
                </Page>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.homeState()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
