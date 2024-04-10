import App from "../App";
import OrderPizza from "./OrderPizza";
import BuildPizza from "./BuildPizza";
import { createBrowserRouter } from "react-router-dom";
import Story from "./Story";
import Cart from "./Cart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Story />,
      },
      {
        path: "/order-pizza",
        element: <OrderPizza />,
      },
      {
        path: "/build-pizza",
        element: <BuildPizza />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default Router;
