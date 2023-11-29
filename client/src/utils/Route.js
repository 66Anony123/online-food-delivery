import Login from "../layouts/Login";
import Home from "../layouts/Home";
const URL =[{
name:'Home',
element:<Home/>,
path:"/"
},
{
    name: 'Login',
    element:<Login/>,
    path:"/login"
}]

export default URL;