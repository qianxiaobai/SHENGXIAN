import React, { Component, Fragment } from 'react'
import { sort, goodsList } from "@api/week"
import { TabBarWrapper, BodyWrapper, BodyWrapper1 } from './styled'
import Header from "@components/header"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5, 16],
            Id: [100840, 100559, 100771, 100591, 100705, 100736, 101318, 100870,
                101429, 100935, 100996, 100625, 101371, 101017, 101310, 101377],
            type: [],
            goodsList: [],
            indexActive: this.props.indexActive
        }
      
      

    }
    render() {
        this.state.indexActive = this.props.indexActive
        this.state.goodsList = this.props.goodsList
        let { type, goodsList, indexActive, arr, Id } = this.state;
        return (
            <BodyWrapper>
                <Header val='满99元减50元，月末亏本清仓' />
                <BodyWrapper1>
                    <div className='category-menu'>
                        <div className='mn-scroller-contents'>
                            <ul className='category-menu-list'>
                                <li ><a onClick={this.props.handleToggleTypes0.bind(this, 9, 0)} className={indexActive === 0 ? 'is-active' : ''} >推荐分类</a></li>
                                {
                                    type.map((item, index) => (
                                        <li key={index}><a onClick={this.props.handleToggleTypes.bind(this, 9, Id[index], index + 1)} className={indexActive === (index + 1) ? 'is-active' : ''} >{item.Name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='category-flex category-contents'>
                        {
                            arr.map((item, index) => (
                                <div key={index} style={{ display: indexActive == (index) ? 'block' : 'none' }}>
                                    <div className='category-banner'></div>
                                    <div className='category-section'>
                                        <div style={{ display: indexActive == 0 ? 'block' : 'none' }}>
                                            <div className='command' >
                                                {
                                                    this.props.goodsList.map((item1, index1) => (
                                                        <div key={index1} className='category-square-item' >
                                                            <div className='image'>
                                                                <img src="http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg" className="mn-image-source" />
                                                            </div>
                                                            <div className='title'>
                                                                {item1.Name}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div style={{ display: indexActive !== 0 ? 'block' : 'none' }}>
                                            {

                                                goodsList.map((item2, index2) => (
                                                    <div key={index2}>
                                                        <div className='category-section-title'>
                                                            <h4>{item2.MetaKeywords}</h4>
                                                            <p >全部</p>
                                                        </div>
                                                        <div className='flex'>
                                                            {item2.SmallCategories ? item2.SmallCategories.map((child, ids) => (
                                                                <div key={ids} className='category-square-item' onClick={this.props.clickGoods.bind(this, { ...this.props }, child.Id, child.Name)} >
                                                                    <div className='image'>
                                                                        <img src='http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg' className='mn-image-source' />
                                                                    </div>
                                                                    <div className='title'>
                                                                        {child.Name}
                                                                    </div>
                                                                </div>

                                                            )) : ''}

                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </BodyWrapper1>
            </BodyWrapper>
        )
    }
    async componentDidMount() {
        let data = await sort();
        this.setState({
            type: data.Data
        });

        let data1 = await goodsList();
        this.setState({
            goodsList: data1.Data.HotCategoryList
        });
    }

    componentWillUpdate() {
      
        //    this.state.goodsList=this.props.goodsList 
        /**
         *  goodsList.map((item,index)=>(
               <div key={index} className='category-square-item'>
                    <div className='image'>
                          <img src="http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg" className="mn-image-source" />
                     </div>
                    <div className='title'>
                        {item.Name}
                     </div>
                 </div>
                 ))
         */
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
