import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Statistics from "../components/Statistics";
import Dashboard from "../components/Dashboard";
import ProductCards from "../components/ProductCards";
import Productdetails from "../pages/Productdetails";
import Contact from "../components/Contact";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      errorElement: <p>Error found</p>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
                {
                    path: '/',
                    element: <ProductCards></ProductCards>,
                    loader: () => fetch('../data.json'),
                },
                {
                    path: '/category/:category',
                    element: <ProductCards></ProductCards>,
                    loader: () => fetch('../data.json'),
                },
                
            ]
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
            children: [
                {
                    path: '/dashboard/cart',
                    element: <Cart></Cart>,
                    loader: () => fetch('../data.json'),
                },
                {
                    path: '/dashboard/wishlist',
                    element: <Wishlist></Wishlist>
                }
            ]
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/details/:product_id',
            element: <Productdetails></Productdetails>,
            loader: () => fetch('../data.json'),
        }
        
      ]
     
    },
  ]);


  export default router