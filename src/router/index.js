import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Register,
    HomeDetail
} from "@pages"

export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue628"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        name:"发现",
        icon:"\ue663"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        name:"订单",
        icon:"\ue737"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true
        },
        name:"我的",
        icon:"\ue617"
    }
]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登录",
    },
    {
    path:"/register",
        component:Register,
        meta:{
            flag:false
        },
        name:"注册",
    },
    {
        path:"/homedetail",
            component:HomeDetail,
            meta:{
                flag:false
            },
            name:"首页详情",
        }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)