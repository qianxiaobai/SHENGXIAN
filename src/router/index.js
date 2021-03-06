import {
    Home,
    Mine,
    Login,
    Register,
    HomeDetail,
    Cart,
    Car,
    Detail,
    Product,
    Search
} from "@pages"

export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue630",
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        name:"分类",
        icon:"\ue66c"
    },
    {
        path:"/car",
        component:Car,
        meta:{
            flag:true,
            auth:true
        },
        name:"购物车",
        icon:"\ue611"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:false,
            auth:false
        },
        name:"我的",
        icon:"\ue67a"
    },
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
    },
        {
            path:"/detail",
            component:Detail,
            meta:{
                flag:false,
                auth:false
            },
            name:"detail",
        },
        {
            path:"/product",
            component:Product,
            meta:{
                flag:false,
                auth:false
            },
            name:"Product",
        },
        {
            path:"/search",
            component:Search,
            meta:{
                flag:false,
                auth:false
            },
            name:"Search",
        }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)