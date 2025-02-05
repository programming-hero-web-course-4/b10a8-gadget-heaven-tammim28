import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
// import Cart from "../pages/Cart";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className="bg-purple-500 text-center py-5">
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="text-white py-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <NavLink to='/dashboard/cart'><button className="border border-purple-400 rounded-3xl px-8  py-2 hover:bg-purple-800 text-white cursor-pointer">Cart</button></NavLink>
                <NavLink to='/dashboard/wishlist'><button className="border border-purple-400 rounded-3xl px-8 py-2 hover:bg-purple-800 text-white cursor-pointer ml-3">Wishlist</button></NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;