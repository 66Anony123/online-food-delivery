import Login from "../components/Login";
import Home from "../components/Home";
const URL =[{
name:'Home',
element:<Home/>,
path:"/home"
},
{
    name: 'Login',
    element:<Login/>,
    path:"/login"
}]

export default URL;