import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, addWishlist, getAllFavorites, } from "../utility/utility";
import { ToastContainer, toast } from 'react-toastify';

const Productdetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();


    const [product, setProduct] = useState(null);

    const [isFavorite, setIsFavorite] = useState(true)

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const singleProduct = data.find((product) => product.product_id == product_id);

            setProduct(singleProduct);
        }
    }, [data, product_id]);

    if (!product) {
        return <h3>Loading product details...</h3>
    }

    const { product_title, product_image, category,
        price, description, Specification, availability, rating } = product



    const handleCart = (product) => {
        addFavorite(product);

    };

    const handleWish = (product) => {
        addWishlist(product);
    }




    return (
        <div className="">
            <div className="bg-purple-600 text-center py-4">
                <h3 className="text-3xl font-bold text-white mb-4">Product Details</h3>
                <p className="text-white text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex justify-around items-center my-4">
                <div>
                    <img className="w-[400px] " src={product_image} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p className="my-2 font-semibold">Price: ${price}</p>
                    <p className="text-green-500">{availability ? "In stock" : "Not available"}</p>
                    <p className="my-2">{description}</p>
                    <h4 className="text-xl">Specification: {Specification.map(specific => <li>{specific}</li>)}</h4>
                    <h4 className="text-xl font-semibold mt-2">Rating:</h4>
                    <div className="flex gap-3 items-center">
                        <div className="flex text-yellow-500">
                            <CiStar></CiStar> <CiStar></CiStar> <CiStar></CiStar> <CiStar></CiStar> <CiStar></CiStar>
                        </div>
                        <p>{rating}</p>
                    </div>
                    <div className="flex gap-6 items-center my-5">
                        <button onClick={() => handleCart(product)} className="px-3 py-2 bg-purple-500 
                        text-white rounded-3xl cursor-pointer">Add to Card</button>
                        <ToastContainer></ToastContainer>
                        <div aria-disabled={isFavorite} className="bg-purple-500 px-3 py-2 rounded-3xl">
                        <FaRegHeart  onClick={() =>
                                handleWish(product)} className="text-2xl cursor-pointer  
                             "></FaRegHeart>
                        </div>
                           
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Productdetails;