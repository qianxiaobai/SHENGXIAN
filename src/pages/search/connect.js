import {
    searchAsyncAction,
    changeAction,
    searchChangeAsyncAction,
    sousuobtn,
    deldetliAction,
    deleteAllAction
} from "@actions/actionsCreater"

export const mapStateToProps = (state) => ({
    n: state.searchStore.n,
    hotlist: state.searchStore.hotlist,
    historylist: state.searchStore.historylist,
    searchlist: state.searchStore.searchlist,
    inputVal: state.searchStore.inputVal,
    show: state.searchStore.show,
    changelist: state.searchStore.changelist
})



export const mapDispatchToProps = (dispatch) => ({
    searchState() {
        dispatch(searchAsyncAction())

    },

    clickHotHandler(name) {
        console.log(name)
        dispatch(searchDetailAsync(name))
        this.props.history.push({pathname: "/detail",query: {name:name}})

    },
    //inputval
    changeHandler(e) {
        let val = e.target.value
        dispatch(changeAction(val))
    },
    //搜索请求数据
    searchChang(e) {
        let value = e.target.value
        dispatch(searchChangeAsyncAction(value))
    },
    //搜索按钮
    sousuoHandler() {
        dispatch(sousuobtn())
    },
    //删除
    deleteli(index) {
        dispatch(deldetliAction(index))
    },
    // 清空
    deleteAll() {
        dispatch(deleteAllAction())
    },

    clickMHsousuo(name) {
        console.log(name)

        dispatch(sousuobtn())
        this.props.history.push({pathname: "/detail",query: {val:val}})
    }
})