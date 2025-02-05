import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="text-center  bg-purple-600 text-white">
                <h2 className="font-bold text-5xl pb-5 pt-20">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
               <Link to='/dashboard'> <button className="bg-white px-6 rounded-3xl cursor-pointer
                 text-purple-500 font-semibold py-2 my-4">Shop Now</button></Link>
            </div>
            <div className="h-[400px] w-[600px]  mx-auto">
                <img className="rounded-3xl outline-1" src="../../public/assets/banner.jpg" alt="" />
            </div>
            <div className="text-center font-bold text-4xl my-12">
                <h2>Explore Cutting-Edge Gadgets</h2>
            </div>
        </div>
    );
};

export default Banner;