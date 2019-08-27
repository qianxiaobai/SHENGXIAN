import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})

const Car = Loadable({
    loader:()=>import("./car"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Detail = Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})
const Product = Loadable({
    loader:()=>import("./product"),
    loading:Loading
})


export {
    Home,
    Cart,
    Car,
    Mine,
    Login,
    Detail,
    Product
}