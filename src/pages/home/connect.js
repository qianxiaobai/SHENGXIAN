

import {homeAsynsAction,centerAsynsAction}  from "@actions/actionsCreater"
 
export const  mapStateToProps =(state)=>({
    navListLeft :state.homeStore.navListLeft,
    navListRight : state.homeStore.navListRight,
    arr:state.homeStore.arr,
    arr0:state.homeStore.arr0,
    arr1: state.homeStore.arr1,
    arr2: state.homeStore.arr2,
    arr3: state.homeStore.arr3,
    arr4: state.homeStore.arr4,
    arr5: state.homeStore.arr5,
    arr6: state.homeStore.arr6,
    arr7: state.homeStore.arr7,
    arr8:state.homeStore.arr8,
    //swiperList
    arr9:state.homeStore.arr9,
    arr10: state.homeStore.arr10,
    arr11: state.homeStore.arr11,
    arr12: state.homeStore.arr12,
    arr13: state.homeStore.arr13,
    arr14: state.homeStore.arr14,
    arr15: state.homeStore.arr15,
})


export const  mapDispatchToProps =(dispatch)=>({
    homeState(){
        dispatch(homeAsynsAction())
        dispatch(centerAsynsAction())
    },

    clickHandler(){
        // let div =this.refs.wrapscroll
        // console.log(div.querySelector(".wrapscroll"))
        // console.log(div.offsetTop)
        // // div.offsetTop=0px;
        // console.log(this.refs.scrolltop.scroll.scrollTo)
        // this.refs.scrolltop.scroll.scrollTo(0,-div.offsetTop)
    }



})