import App from "../App";
import OrderPizza from "./OrderPizza";
import BuildPizza from "./BuildPizza";
import { createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";

const Router=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/order-pizza",
                element: <OrderPizza/>
            },
            {
                path:"/build-pizza",
                element: <BuildPizza/>
            },
            {
                path:"/footer",
                element: <Footer/>
            }
        ]
    }
])
export default Router;