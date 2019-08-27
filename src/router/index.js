import {
    Home,
    Cart,
    Car,
    Mine,
    Login,
    Detail,
    Product
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
            flag:true
        },
        name:"购物车",
        icon:"\ue611"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:false,
            auth:true
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
        name:"登陆",
       
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
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)