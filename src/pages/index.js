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
const Register = Loadable({
    loader:()=>import("./Register"),
    loading:Loading
})
const HomeDetail = Loadable({
    loader:()=>import("./homedetail/homedetail"),
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
const Search = Loadable({
    loader:()=>import("./search/search.js"),
    loading:Loading
})
export {
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
}