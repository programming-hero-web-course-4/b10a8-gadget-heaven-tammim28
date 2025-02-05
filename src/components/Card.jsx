import { Link, useLocation } from "react-router-dom";


const Card = ({ product }) => {
    const {pathname} = useLocation()
    const { product_id, product_title, product_image, category,
        price, description, Specification, availability, rating } = product
    return (
        <div>
        <Link to={`/details/${product_id}`}>
            <div className="border border-gray-300 p-5 rounded-2xl">
                <img className="h-[150px] rounded-3xl" src={product_image} alt="" />
                <h3>{product_title}</h3>
                <p>{price}</p>
                <button className="border border-purple-500 cursor-pointer px-4 
            font-semibold py-2 rounded-3xl">View Details</button>

            
        
            </div>

        </Link>
        
       
        </div>
        
    );
};

export default Card;